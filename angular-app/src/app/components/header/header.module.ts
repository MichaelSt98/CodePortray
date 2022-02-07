import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header.component';
import { NavigationService } from "../../services/navigation.service";
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
            MatIconModule,
            MatButtonModule,
            BrowserModule,
            RouterModule.forRoot([])],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  providers: [NavigationService],
})
export class HeaderModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(HeaderComponent, {
      injector: this.injector,
    });

    customElements.define('custom-header', el);
  }
}
