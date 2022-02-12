import {Component, Input, OnInit, ViewEncapsulation, TemplateRef} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  @Input() windowWidth: string = "100px";
  @Input() windowHeight: string = "100px";

  constructor(private dialog: MatDialog) {

  }

  openModal(temp: TemplateRef<any>) {
    this.dialog.open(temp, { width: this.windowWidth, height: this.windowHeight });
  }

  //@Input() color: string = "#FFFFFF";

  ngOnInit(): void {

  }

}
