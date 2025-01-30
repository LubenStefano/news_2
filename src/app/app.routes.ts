import { Routes } from '@angular/router';
import { PostFlowComponent } from './post-flow/post-flow.component';

export const routes: Routes = [
    { path: '', component: PostFlowComponent },
    { path: 'home', component: PostFlowComponent },
];