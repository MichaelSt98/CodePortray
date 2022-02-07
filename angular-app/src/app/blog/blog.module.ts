import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EntryListComponent } from './blog-entries/blog-entries.component';
import { PostComponent } from './post/post.component';
//import { IconsComponent } from "../components/icons/icons.component";
//import {IconsModule} from "../components/icons/icons.module";

@NgModule({
  declarations: [EntryListComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntryListComponent,
      },
      // setting up the router to use param
      {path: ':id', component: PostComponent, pathMatch: 'full'},
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    RouterModule,
    RouterModule,
    //IconsModule,
  ],
})
export class BlogModule {}
