import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { IconsComponent } from './components/icons/icons.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CustomListComponent } from './custom-list/custom-list.component';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SecurityContext } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NgSqCommonModule } from '@sq-ui/ng-sq-common';
import { NgModalModule } from '@sq-ui/ng-modal';
import { DialogComponent } from './components/dialog/dialog.component';
//import { ClipboardModule } from 'ngx-clipboard';
//import { EntryListComponent } from './blog/blog-entries/blog-entries.component';
//import { PostComponent } from './blog/post/post.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { BlogModule } from "./blog/blog.module";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HamburgerComponent,
    IconsComponent,
    SideNavContentComponent,
    AppPageComponent,
    PortfolioPageComponent,
    ServicesPageComponent,
    CustomListComponent,
    MarkdownComponent,
    FooterComponent,
    DialogComponent,
    //EntryListComponent,
    //PostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    NgSqCommonModule,
    NgModalModule,
    //ClipboardModule,
    //BlogModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

