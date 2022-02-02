import {Component, OnInit, OnChanges, ViewEncapsulation, Input, SimpleChanges} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from './side-nav-direction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit, OnChanges {

  @Input()
  showSideNav: Observable<boolean> | undefined;
  //public SideNavDirectionEnum = SideNavDirection;

  //@Input() sidenavTemplateRef: any | null;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;

  @Input() showSideBar: boolean = false;

  constructor(public navService: NavigationService) {
  //constructor() {
  }

  //@Input() navService: NavigationService;

  ngOnInit(): void {
    console.log("getShowNav():", this.navService.getShowNav());
    this.showSideNav = this.navService.getShowNav();
    this.navService.setShowNav(true);
    this.showSideNav = this.navService.getShowNav();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.showSideBar) {
      this.navService.setShowNav(this.showSideBar);
      this.showSideBar = false;
    }
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }

  @Input()
  toggleSideNav() {
    console.log("toggle side nav....");
    console.log("getShowNav():", this.navService.getShowNav());
    this.navService.setShowNav(true);
  }
}
