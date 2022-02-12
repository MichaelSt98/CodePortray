import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copyable',
  templateUrl: './copyable.component.html',
  styleUrls: ['./copyable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CopyableComponent implements OnInit {

  //@Input() copyId: HTMLInputElement | HTMLTextAreaElement | undefined; //string = "";

  @Input() copyText: string = "";
  @Input() width: string = "100px";
  @Input() height: string = "10px";
  @Input() background: string = "#FFFFFF";
  displayText: string = this.copyText;

  constructor(private clipboard: Clipboard) {
    //this.displayText = this.copyText;
  } //private clipboard: Clipboard

  copy() {
    this.displayText = "copied!";
    this.background = "#648d04";
    setTimeout(()=>{
      this.displayText = this.copyText;
      this.background = "#FFFFFF";
    }, 3000);
    //return this.copyText;
    this.clipboard.copy(this.copyText);
  }

  //@Input() url: string = "";

  ngOnInit(): void {
    this.displayText = this.copyText;
    this.background = "#FFFFFF";
  }

}
