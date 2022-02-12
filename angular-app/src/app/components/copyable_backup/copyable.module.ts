import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule} from '@angular/core'; // CUSTOM_ELEMENTS_SCHEMA,
import { createCustomElement } from '@angular/elements';
import { CopyableComponent } from './copyable.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxCopyToClipboardModule } from 'ngx-copy-to-clipboard';

@NgModule({
  imports: [CommonModule,
    //MatIconModule,
    //MatButtonModule,
    ClipboardModule,
    //NgxCopyToClipboardModule,
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
