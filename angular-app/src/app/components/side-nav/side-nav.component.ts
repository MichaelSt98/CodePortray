import {Component, OnInit, OnChanges, ViewEncapsulation, Input, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
//import { BehaviorSubject } from 'rxjs';
import { SideNavDirection } from './side-nav-direction';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit, OnChanges { // , OnChanges

  //public SideNavDirectionEnum = SideNavDirection;

  //@Input() sidenavTemplateRef: any | null;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;

  @Input() showSideBar: boolean = false;
  //@Input()
  //showSideNav: Observable<boolean> | undefined;
  @Input()
  showSideNav: Observable<boolean> | undefined;

  constructor(public navService: NavigationService) {

  }

  ngOnInit(): void {
    console.log("getShowNav():", this.navService.getShowNav());
    this.showSideNav = this.navService.getShowNav();
    //this.showSideNav = this.getShowNav();
    this.navService.setShowNav(false);
    this.showSideNav = this.navService.getShowNav();

    this.showSideBar = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.showSideBar) {
      this.navService.setShowNav(this.showSideBar);
      this.showSideBar = false;
    }
    //this.showSideBar = (this.showSideNav | async)! ;
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
    //this.setShowNav(false);
    this.showSideBar = false;
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }


  @Input()
  toggleSideNav(useNavService=true) {
    console.log("toggle side nav....");
    //this.showSideBar = !this.showSideBar;
    //console.log(this.showSideBar);
    //this.cd.detectChanges();
    //console.log("getShowNav():", this.navService.getShowNav());
    if (useNavService) {
      this.navService.setShowNav(true);
    }
    else {
      this.showSideBar = !this.showSideBar;
    }
    //this.setShowNav(true);
    //this.toggleNavState();
  }

}
