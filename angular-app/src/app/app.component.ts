import { Component, ViewEncapsulation } from '@angular/core';
import { SideNavDirection } from './components/side-nav/side-nav-direction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular app';
  //sideNavDirection = SideNavDirection.Left;
  SideNavDirection = SideNavDirection;

}
