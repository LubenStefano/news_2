import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [FormsModule, NgIf],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    const user = {
      email: form.value.email,
      password: form.value.password,
    };

    this.userService.login(user.email, user.password).subscribe(() => {
      this.router.navigate(["/home"]);
    });
  }
}
