import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copyable',
  templateUrl: './copyable.component.html',
  styleUrls: ['./copyable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CopyableComponent implements OnInit {

  @Input() width: string = "50px";
  @Input() text: string = "to be copied";

  constructor(private clipboard: Clipboard) { }

  copyText() {
    this.clipboard.copy(this.text);
  }

  //@Input() url: string = "";

  ngOnInit(): void {

  }

}
