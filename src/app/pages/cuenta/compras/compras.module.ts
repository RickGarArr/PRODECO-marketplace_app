import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { ComprasPageRoutingModule } from './compras-routing.module';

import { ComprasPage } from './compras.page';
import { CuentaComponentesModule } from '../componentes/cuenta-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprasPageRoutingModule,
    CuentaComponentesModule
  ],
  declarations: [ComprasPage]
})
export class ComprasPageModule {}
