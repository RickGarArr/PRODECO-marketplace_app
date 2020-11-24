import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DireccionComponent } from './direccion/direccion.component';
import { Direccion } from '../../../interfaces/interfaces';
import { DireccionesService } from 'src/app/services/direcciones.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {

  constructor(
    public direccionesService: DireccionesService,
    private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  async modalDireccion(opcion: string, index?: number) {
    let modalDireccion;
    if (opcion === 'crear') {
      modalDireccion = await this.modalCtrl.create({
        component: DireccionComponent,
        componentProps: {
          index: this.direccionesService.direcciones.length
        }
      });
    } else if (opcion === 'ver') {
      modalDireccion = await this.modalCtrl.create({
        component: DireccionComponent,
        componentProps: {
          direccion: this.direccionesService.direcciones[index],
          index
        }
      });
    }

    await modalDireccion.present();
  }
}
