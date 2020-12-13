import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalBuscarComponent } from '../../componentes/modal-buscar/modal-buscar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  usuario = {
    nombre: 'Ricardo',
    apellido: 'Garcia'
  };

  anuncios: any[] = [];

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    ) {}

  ngOnInit() {

  }

  async abrirBuscar() {
    const modal = await this.modalCtrl.create({
      component: ModalBuscarComponent,
      componentProps: []
    });
    await modal.present();
  }

  doRefresh(event) {
    console.log(event);

    setTimeout(() => {
      event.detail.complete();
    }, 1500);
  }

  navegar(page: string) {
    this.navCtrl.navigateForward(page);
  }

}
