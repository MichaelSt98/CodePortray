import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule} from '@angular/core'; // CUSTOM_ELEMENTS_SCHEMA,
import { createCustomElement } from '@angular/elements';
import { CopyableComponent } from './copyable.component';
//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [CommonModule,
    //MatIconModule,
    //MatButtonModule,
    ClipboardModule,
    BrowserModule],
  exports: [CopyableComponent],
  declarations: [CopyableComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
})
export class CopyableModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(CopyableComponent, {
      injector: this.injector,
    });

    customElements.define('custom-copyable', el);
  }
}
