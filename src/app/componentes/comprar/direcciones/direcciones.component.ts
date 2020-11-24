import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Direccion } from 'src/app/interfaces/interfaces';
import { DireccionComponent } from 'src/app/pages/cuenta/direcciones/direccion/direccion.component';
import { DireccionesService } from 'src/app/services/direcciones.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss'],
})
export class DireccionesComponent implements OnInit {

  @Input() direcciones: Direccion[];

  constructor(
    public direccionesService: DireccionesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.direcciones);
  }

  async crearDireccion() {
    const modalDireccion = await this.modalCtrl.create({
      component: DireccionComponent,
      componentProps: {
        index: this.direccionesService.direcciones.length
      }
    });

    modalDireccion.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'direcciones');
  }
}
