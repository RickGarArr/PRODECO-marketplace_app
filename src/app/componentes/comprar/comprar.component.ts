import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DireccionComponent } from 'src/app/pages/cuenta/direcciones/direccion/direccion.component';
import { DireccionesComponent } from './direcciones/direcciones.component';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss'],
})
export class ComprarComponent implements OnInit {

  noDatos: true;

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss( null, null, 'comprar')
  }

  async seleccionarDireccion() {
    const direcciones = await this.modalCtrl.create({
      id: 'direcciones',
      component: DireccionesComponent
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
}
