import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CustomListComponent } from './custom-list/custom-list.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    SideNavContentComponent,
    AppPageComponent,
    PortfolioPageComponent,
    ServicesPageComponent,
    CustomListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

