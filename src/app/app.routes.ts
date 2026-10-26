import { Routes } from '@angular/router';
import { ResumenComponent } from './pages/resumen/resumen.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';

export const routes: Routes = [
    {path: '', component: ResumenComponent},
    {path: 'dashboard', component: ResumenComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'movimientos', component: MovimientosComponent},
    {path: 'marcasproveedores', component: MarcasComponent}
];
