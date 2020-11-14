import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';
import { CuentaComponentesModule } from './componentes/cuenta-componentes.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  providers: [
    CuentaComponentesModule,
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    CuentaComponentesModule,
    ComponentesModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}
