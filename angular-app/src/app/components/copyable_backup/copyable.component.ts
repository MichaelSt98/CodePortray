import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-copyable',
  templateUrl: './copyable.component.html',
  styleUrls: ['./copyable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CopyableComponent implements OnInit {

  @Input() copyId: HTMLInputElement | HTMLTextAreaElement | undefined; //string = "";

  constructor() { } //private clipboard: Clipboard

  copyText() {

  }

  //@Input() url: string = "";

  ngOnInit(): void {

  }

}
