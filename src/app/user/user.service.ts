import { Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { catchError, from, Observable, of, switchMap } from "rxjs";
import { User } from "../types/user"
import { doc, limit, orderBy, query, setDoc } from "firebase/firestore";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  createUser(userData: {
    email: string;
    username: string;
    password: string;
    pfp: string;
  }): Observable<void> {
    const { email, username, password, pfp } = userData;
  
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((credential) => {
        const user = credential.user;
  
        return updateProfile(user, {
          displayName: username,
          photoURL: pfp,
        }).then(() => {
          const userDocRef = doc(this.firestore, `users/${user.uid}`);
          const userDocData = {
            uid: user.uid,         
            username: username,    
            pfp: pfp,              
            likesCount: 0,         
            postsCount: 0          
          };
  
          // Save the user document to Firestore
          return setDoc(userDocRef, userDocData);
        });
      }),
      catchError((error) => {
        console.error('Error during registration:', error);
        throw new Error('Registration failed');
      })
    );
  }

  
  login(email: string, password: string): Observable<{ uid: string; displayName: string }> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((credential) => {
        const user = credential.user;
        return of({
          uid: user.uid,
          displayName: user.displayName || "",
        });
      }),
      catchError((error) => {
        console.error(error.code);
        throw new Error(error.code);
      })
    );
  }

  getTopCreators(): Observable<User[]> {
    const usersCollection = collection(this.firestore, "users");
    const usersQuery = query(usersCollection, orderBy("likesCount", "desc"), limit(5));
    console.log(collectionData(usersQuery, { idField: 'id' }));
    
    return collectionData(usersQuery, { idField: 'id' }) as Observable<User[]>;
  }
}
