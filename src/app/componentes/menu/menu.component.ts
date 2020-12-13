import { Component, Input, OnInit } from '@angular/core';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { ModalBuscarComponent } from '../modal-buscar/modal-buscar.component';
import { ModalSignComponent } from '../modal-sign/modal-sign.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() registrado;

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    ) {
      console.log(this.registrado);
    }

  ngOnInit() {
  }

  navegar(pagina: string) {
    if (pagina === 'productos') {
      this.navCtrl.navigateForward([pagina, {opcion: 'ofertas'}])
      this.menuCtrl.close('first');
    } else {
      this.navCtrl.navigateForward(pagina);
      this.menuCtrl.close('first');
    }
  }
  navMensajeria(){
    this.navCtrl.navigateForward('/mensajeria');
    this.menuCtrl.close('first');
  }

  async abrirModal( nombre: string) {

    let componente: any;
    let id: string;
    let inicio: boolean;

    if (nombre === 'buscar') {
      componente = ModalBuscarComponent;
      id = 'buscar';
    } else if (nombre === 'sign'){
      componente = ModalSignComponent;
      id = 'sign';
      inicio = false;
    }

    this.menuCtrl.close('first');

    const modal = await this.modalCtrl.create({
      component: componente,
      id,
      componentProps: {inicio}
    });

    modal.present();
  }
}
