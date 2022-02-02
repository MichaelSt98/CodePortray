import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SideNavComponent } from './side-nav.component';
import {NavigationService} from "../../services/navigation.service";
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([])],
  exports: [SideNavComponent],
  declarations: [SideNavComponent],
  providers: [NavigationService],
})
export class SideNavModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(SideNavComponent, {
      injector: this.injector,
    });

    customElements.define('custom-side-nav', el);
  }
}
