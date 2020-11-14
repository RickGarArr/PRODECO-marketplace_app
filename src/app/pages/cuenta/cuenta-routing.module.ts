import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaPage } from './cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaPage
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then( m => m.ComprasPageModule)
  },  {
    path: 'mis-datos',
    loadChildren: () => import('./mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaPageRoutingModule {}
