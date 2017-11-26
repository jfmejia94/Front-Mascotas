import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes';

//componente
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MascotasComponent } from './component/mascotas/mascotas.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ProductosComponent } from './component/productos/productos.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { GalleryComponent } from './component/home/gallery/gallery.component';
import { ImageListComponent } from './component/home/gallery/image-list/image-list.component';
import { ImageComponent } from './component/home/gallery/image-list/image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MascotasComponent,
    ServiciosComponent,
    ProductosComponent,
    FooterComponent,
    GalleryComponent,
    ImageListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
