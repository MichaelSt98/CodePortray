import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  //@ViewChild("toggle") public toggleRef: ElementRef<HTMLElement> | undefined;

  constructor(private navService: NavigationService) { }

  ngOnInit(): void {

  }

  //@Input()
  //getToggleRef() : ElementRef<HTMLElement> | undefined {
  //  return this.toggleRef;
  //}

  //@Input()
  //toggleSideNav() {
  //  console.log("toggle side nav...");
  //  this.navService.setShowNav(true);
  //}

}
