import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule} from '@angular/core'; // CUSTOM_ELEMENTS_SCHEMA,
import { createCustomElement } from '@angular/elements';
import { IconsComponent } from './icons.component';
//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule,
    //MatIconModule,
    //MatButtonModule,
    BrowserModule],
  exports: [IconsComponent],
  declarations: [IconsComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
})
export class IconsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(IconsComponent, {
      injector: this.injector,
    });

    customElements.define('custom-icon', el);
  }
}
