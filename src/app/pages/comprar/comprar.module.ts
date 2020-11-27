import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComprarPageRoutingModule } from './comprar-routing.module';

import { ComprarPage } from './comprar.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ResumenComponent } from './resumen/resumen.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarPageRoutingModule,
    ComponentesModule
  ],
  declarations: [
    ComprarPage,
    ResumenComponent,
    MetodoPagoComponent
  ]
})
export class ComprarPageModule {}
