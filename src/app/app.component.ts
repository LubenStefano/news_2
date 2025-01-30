import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";
import { AdsAsideComponent } from './core/ads-aside/ads-aside.component';
import { SideNavbarComponent } from "./core/side-navbar/side-navbar.component";
import { PostFlowComponent } from "./post-flow/post-flow.component";
import { DashboardUiComponent } from "./dashboard-ui/dashboard-ui.component";
import { LedDisplayComponent } from './led-display/led-display.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AdsAsideComponent, SideNavbarComponent, DashboardUiComponent, LedDisplayComponent],
  templateUrl: './app.component.html',
  template: `<app-led-display text="Scrolling LED Text in Angular 15+!"></app-led-display>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news';
}
