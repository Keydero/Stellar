import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { AboutComponent } from './about/about.component';
import { StaffSliderComponent } from './staff-slider/staff-slider.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    AboutComponent,
    StaffSliderComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
