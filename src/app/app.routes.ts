import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MascotasComponent } from './component/mascotas/mascotas.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ProductosComponent } from './component/productos/productos.component';

const APP_ROUTES : Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'mascotas', component: MascotasComponent },
	{ path: 'servicios', component: ServiciosComponent },
	{ path: 'productos', component: ProductosComponent },
	{ path: '**', pathMatch : 'full' , redirectTo: 'home'}
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);