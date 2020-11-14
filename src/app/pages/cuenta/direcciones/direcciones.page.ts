import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DireccionComponent } from './direccion/direccion.component';
import { Direccion } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {

  direccion: Direccion;

  noDatos: boolean;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    this.noDatos = true;

    this.direccion = {
      contacto: {
        apellido: 'Garcia',
        nombre: 'Ricardo',
        telefono: '6778790329'
      },
      domicilio: {
        calle: 'Pereyra',
        colonia: 'Zona Centro',
        cp: '34000',
        descripcion: 'Casa Blanca, Ventanas Cafes',
        entreCalle1: 'Fco. I. Madero',
        entreCalle2: 'Pasteur',
        numExt: '317',
        numInt: null
      }
    };
  }

  async modalDireccion( opcion: string) {
    let modalDireccion;
    if (opcion === 'crear') {
      modalDireccion = await this.modalCtrl.create({
        component: DireccionComponent
      });
    } else if (opcion === 'ver') {
      modalDireccion = await this.modalCtrl.create({
        component: DireccionComponent,
        componentProps: {
            data: this.direccion
          }
      });
    }

    await modalDireccion.present();
  }

  switch() {
    this.noDatos = !this.noDatos;
  }

}
