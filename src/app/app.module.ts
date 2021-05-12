import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { FooterComponent } from './shared/layout/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule,
    MegaMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
