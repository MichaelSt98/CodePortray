import {Injectable, Input, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {

  public showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public router: Router) {
    router.events.subscribe(() => {
      this.setShowNav(false);
    });
  }

  ngOnInit() {
  }

  @Input()
  getShowNav(){
    return this.showNav$.asObservable();
  }

  @Input()
  setShowNav(showHide: boolean) {
    this.showNav$.next(showHide);
  }

  @Input()
  toggleNavState() {
    this.showNav$.next(!this.showNav$.value);
  }

  @Input()
  isNavOpen() {
    return this.showNav$.value;
  }
}
