import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';


import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImagePipe } from './pipes/image.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { YoutubePipe } from './pipes/youtube.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    ImagePipe,
    TarjetasComponent,
    PeliculaComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
