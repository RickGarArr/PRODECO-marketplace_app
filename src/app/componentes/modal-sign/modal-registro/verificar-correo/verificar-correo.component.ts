import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataLocalService } from '../../../../services/data-local.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.scss'],
})
export class VerificarCorreoComponent implements OnInit {

  @Input() email: string;
  @Input() usuario: object;

  constructor(
    private dlService: DataLocalService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // id: verificar
  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'verificar');
  }

  crearCuenta() {
    console.log(this.usuario);
    this.presentLoading();
    this.modalCtrl.dismiss(null, 'salir', 'verificar');
    this.dlService.guardarOmitirModalSign();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere',
      duration: 1500
    });
    await loading.present();
  }

}
