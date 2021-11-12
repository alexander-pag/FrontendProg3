import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './publico/template/header/header.component';
import { NavbarComponent } from './publico/template/navbar/navbar.component';
import { FooterComponent } from './publico/template/footer/footer.component';
import { InicioComponent } from './publico/general/inicio/inicio.component';
import { NoSeEncontroComponent } from './publico/errors/no-se-encontro/no-se-encontro.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,

    InicioComponent,
     NoSeEncontroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
