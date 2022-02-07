import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {

  }

  toggleSideNav() {
    console.log("toggle side nav...");
    this.navService.setShowNav(true);
  }

}
