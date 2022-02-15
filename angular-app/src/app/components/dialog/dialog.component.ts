import {Component, Input, OnInit, ViewEncapsulation, TemplateRef, ViewChild} from '@angular/core';
//import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from '@sq-ui/ng-modal'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  @Input() windowWidth: string = "100px";
  @Input() windowHeight: string = "100px";

  showModal = false;

  ngOnInit(): void {

  }

}
