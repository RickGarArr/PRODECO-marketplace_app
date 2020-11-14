import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedoresPage } from './vendedores.page';

const routes: Routes = [
  {
    path: '',
    component: VendedoresPage
  },  {
    path: 'vendedor',
    loadChildren: () => import('./vendedor/vendedor.module').then( m => m.VendedorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedoresPageRoutingModule {}
