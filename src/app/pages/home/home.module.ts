import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentesModule } from '../../componentes/componentes.module';
import { ModalBuscarComponent } from '../../componentes/modal-buscar/modal-buscar.component';
import { HomeComponentsModule } from './home-components/home-components.module';


@NgModule({
  entryComponents: [
    ModalBuscarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentesModule,
    HomeComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
