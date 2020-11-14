import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Cuenta } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  cuenta: Cuenta;

  constructor(
    private navCtrl: NavController,
    private dataService: ServiceService ) { }

  ngOnInit() {
    this.dataService.getCuenta().subscribe( resp => {
      this.cuenta = resp;
      // console.log('resp :>> ', this.cuenta);
    });
  }

  navegar(pagina: string) {
    this.navCtrl.navigateForward(`cuenta/${pagina}`);
  }

}
