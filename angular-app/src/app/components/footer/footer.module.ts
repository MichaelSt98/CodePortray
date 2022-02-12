import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FooterComponent } from './footer.component';
//import { NavigationService } from "../../services/navigation.service";
//import { RouterModule, Routes } from '@angular/router';
//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
            BrowserModule],
  exports: [FooterComponent],
  declarations: [FooterComponent],
  providers: [], //NavigationService
})
export class FooterModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(FooterComponent, {
      injector: this.injector,
    });

    customElements.define('custom-footer', el);
  }
}
