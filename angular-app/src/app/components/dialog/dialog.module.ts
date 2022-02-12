import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DoBootstrap, NgModule, Injector } from "@angular/core";

//import { AppRoutingModule } from "../../app-routing.module";
import { createCustomElement } from "@angular/elements";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogComponent } from './dialog.component';


@NgModule({
  imports: [BrowserModule,
    //AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,],
  exports: [DialogComponent],
  declarations: [DialogComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
})
export class DialogModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(DialogComponent, {
      injector: this.injector,
    });

    customElements.define('custom-dialog', el);
  }
}
