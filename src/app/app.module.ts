import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadeComponent } from './header/foolder/nav/heade/heade.component';
import {CardModule} from 'primeng/card';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { FooldComponent } from './header/foolder/nav/foold/foold.component';
import { HomeComponent } from './produtos/home/home.component';
import { TesteComponent } from './produtos/teste/teste.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    FooldComponent,
    HomeComponent,
    TesteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MegaMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
