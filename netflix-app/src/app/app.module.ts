import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperExampleComponent } from './component/swiper-example/swiper-example.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    SwiperExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
