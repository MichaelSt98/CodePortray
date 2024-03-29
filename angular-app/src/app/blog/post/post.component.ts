import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {
  post$: Observable<string> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post$ = this.route.params.pipe(
      map((params) => `/markdown-files/${params['id']}/${params['id']}.md`)
    );
  }
}
