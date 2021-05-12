import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadeComponent } from './header/foolder/nav/heade/heade.component';
import { FooldComponent } from './header/foolder/nav/foold/foold.component';
import { HomeComponent } from './produtos/home/home.component';
import { TesteComponent } from './produtos/teste/teste.component';
import { PrimengModule } from './primeng.module';



@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    FooldComponent,
    HomeComponent,
    TesteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
