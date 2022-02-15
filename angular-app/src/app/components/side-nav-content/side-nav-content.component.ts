import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavContentComponent implements OnInit {

  //showSubMenu = false;

  navItems = [
    { label: 'Apps', route: '/apps', icon: 'linkedin', showSubMenu: false,
      children: [ { label: 'Portfolio', route: '../portfolio', icon: 'home'},
                  { label: 'Services', route: '/services', icon: 'home'},
                  { label: 'Blog', route: '/blog', icon: 'home'}]},
    { label: 'Portfolio', route: '/portfolio', icon: 'home', showSubMenu: false,
      children: [ { label: 'Portfolio', route: '/portfolio', icon: 'home'},
                  { label: 'Services', route: '/services', icon: 'home'}]},
    { label: 'Services', route: '/services', icon: 'home'},
    { label: 'Blog', route: '/blog', icon: 'home'}
  ];

  constructor(private router: Router) {
    //for (let navItem in this.navItems) {
    //  navItem.showSubMenu = false;
    //}
  }

  ngOnInit(): void {
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }

}
