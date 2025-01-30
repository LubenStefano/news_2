import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { AdsAsideComponent } from './core/ads-aside/ads-aside.component';
import { SideNavbarComponent } from "./core/side-navbar/side-navbar.component";
import { PostFlowComponent } from "./post-flow/post-flow.component";
import { DashboardUiComponent } from "./dashboard-ui/dashboard-ui.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AdsAsideComponent, SideNavbarComponent, PostFlowComponent, DashboardUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news';
}
