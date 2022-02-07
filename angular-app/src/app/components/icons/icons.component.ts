import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconsComponent implements OnInit {

  constructor() { }

  @Input() color: string = "#FFFFFF";
  @Input() background: string = '#000000';
  @Input() icon: string = "";
  @Input() url: string = "";

  ngOnInit(): void {

  }

}
