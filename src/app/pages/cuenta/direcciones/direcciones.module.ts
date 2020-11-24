import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionesPageRoutingModule } from './direcciones-routing.module';

import { DireccionesPage } from './direcciones.page';
import { CuentaComponentesModule } from '../componentes/cuenta-componentes.module';
import { DireccionComponent } from './direccion/direccion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DireccionesPageRoutingModule,
    CuentaComponentesModule
  ],
  declarations: [
    DireccionesPage,
    DireccionComponent
  ]
})
export class DireccionesPageModule {}
