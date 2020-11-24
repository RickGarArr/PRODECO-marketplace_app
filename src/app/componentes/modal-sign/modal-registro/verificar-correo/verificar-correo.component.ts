import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.scss'],
})
export class VerificarCorreoComponent implements OnInit {

  @Input() email: string;
  @Input() usuario: object;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // id: verificar
  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'verificar');
  }

  crearCuenta() {
    this.authService.signUp(this.usuario);
    this.presentLoading();
    this.modalCtrl.dismiss(null, 'salir', 'verificar');
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere',
      duration: 1500
    });
    await loading.present();
  }

}
