import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cuenta } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {

  cuenta: Cuenta;

  constructor(
    private navCtrl: NavController, ) { }

  navegar(pagina: string) {
    this.navCtrl.navigateForward(`cuenta/${pagina}`);
  }

}
