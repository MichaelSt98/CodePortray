import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  @Input() color: string = "#FFFFFF";
  @Input() background: string = '#000000';

  constructor() { }

  ngOnInit(): void {

  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

}
