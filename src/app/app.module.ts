import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AboutComponent } from './about/about.component';
import { StaffSliderComponent } from './staff-slider/staff-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    AboutComponent,
    StaffSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
