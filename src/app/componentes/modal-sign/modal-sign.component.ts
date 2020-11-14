import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRegistroComponent } from './modal-registro/modal-registro.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';

@Component({
  selector: 'app-modal-sign',
  templateUrl: './modal-sign.component.html',
  styleUrls: ['./modal-sign.component.scss'],
})
export class ModalSignComponent implements OnInit {

  @Input() inicio: boolean;

  constructor(
    private modalCtrl: ModalController
    ) {  }

  // id: sign
  ngOnInit() {}

  cerrarModal(operacion?: string){
    if (operacion === 'omitir') {
      this.modalCtrl.dismiss(null, 'omitir', 'sign');
    } else {
      this.modalCtrl.dismiss(null, null, 'sign');
    }
  }

  entregar() {
  }

  async sign(modal: string) {
    let componente: any;
    let id: string;
    if ( modal === 'login' ) {
      componente = ModalRegistroComponent;
      id = 'registrar';
    } else {
      componente = ModalLoginComponent;
      id = 'entrar';
    }

    const sign =  await this.modalCtrl.create({
      component: componente,
      id
    });

    sign.present();

    await sign.onDidDismiss().then(data => {
      if (data.role === 'salir') {
        this.modalCtrl.dismiss( null, null, 'sign');
      }
    });
  }
}
