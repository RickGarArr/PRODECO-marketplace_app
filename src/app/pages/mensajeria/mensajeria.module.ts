import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeriaPageRoutingModule } from './mensajeria-routing.module';

import { MensajeriaPage } from './mensajeria.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeriaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MensajeriaPage]
})
export class MensajeriaPageModule {}
