import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HamburgerComponent } from './hamburger.component';
import {NavigationService} from "../../services/navigation.service";
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    RouterModule.forRoot([])],
  exports: [HamburgerComponent],
  declarations: [HamburgerComponent],
  providers: [NavigationService],
})
export class HamburgerModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(HamburgerComponent, {
      injector: this.injector,
    });

    customElements.define('custom-hamburger', el);
  }
}
