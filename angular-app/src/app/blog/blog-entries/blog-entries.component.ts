import {Component, OnInit} from '@angular/core';
import { entries, Post } from 'config/entries';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-entry-list',
  templateUrl: './blog-entries.component.html',
  styleUrls: ['./blog-entries.component.css'],
})
export class EntryListComponent implements OnInit {


  entries!: Post[]; //| undefined;

  downloadIcon: string = "download";

  markdownPreview: string = "# Header";

  constructor(private mdService: MarkdownService, private http: HttpClient) {
  }

  slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  ngOnInit(): void {
    this.entries = entries.map((entry) => ({
      ...entry,
      //slug: this.slugify(entry.title),
      slug: entry.file,
    }));
  }
}
