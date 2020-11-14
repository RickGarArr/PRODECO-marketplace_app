import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { ComprarComponent } from 'src/app/componentes/comprar/comprar.component';
import { PopOverComponent } from './pop-over/pop-over.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  productos: boolean;

  constructor(
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController) {
      this.productos = false;
    }

  ngOnInit() {
  }

  async popOpciones(event) {
    const pop = await this.popoverCtrl.create({
      component: PopOverComponent,
      event,
    });

    pop.present();
  }

  async comprar() {
    const comprar = await this.modalCtrl.create({
      component: ComprarComponent,
      id: 'comprar'
    });

    comprar.present();
  }

}
