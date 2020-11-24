import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DireccionComponent } from 'src/app/pages/cuenta/direcciones/direccion/direccion.component';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { ResumenComponent } from './resumen/resumen.component';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss'],
})
export class ComprarComponent implements OnInit {

  constructor(
    private direccionesService: DireccionesService,
    private modalCtrl: ModalController) {
      console.log(direccionesService.direcciones);
    }

  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss( null, null, 'comprar')
  }

  async seleccionarDireccion() {
    const direcciones = await this.modalCtrl.create({
      id: 'direcciones',
      component: DireccionesComponent,
      componentProps: {
        direcciones: this.direccionesService.direcciones
      }
    });
    await direcciones.present();
  }

  async modalDireccion(id: string) {
    const agregar = await this.modalCtrl.create({
      component: DireccionComponent,
      id
    });
    await agregar.present();
  }

  async modalResumen( id: string ) {
    const resumen = await this.modalCtrl.create({
      component: ResumenComponent,
      id
    });
  resumen.present();
  }

}
