import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalSignComponent } from './modal-sign/modal-sign.component';
import { ModalBuscarComponent } from '../componentes/modal-buscar/modal-buscar.component';
import { ModalRegistroComponent } from './modal-sign/modal-registro/modal-registro.component';
import { VerificarCorreoComponent } from './modal-sign/modal-registro/verificar-correo/verificar-correo.component';
import { ModalLoginComponent } from './modal-sign/modal-login/modal-login.component';
import { HeaderComponent } from './header/header.component';
import { ComprarComponent } from './comprar/comprar.component';

@NgModule({
  declarations: [
    MenuComponent,
    ModalSignComponent,
    ModalBuscarComponent,
    ModalLoginComponent,
    ModalRegistroComponent,
    VerificarCorreoComponent,
    HeaderComponent,
    ComprarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    ComprarComponent
  ]
})
export class ComponentesModule { }
