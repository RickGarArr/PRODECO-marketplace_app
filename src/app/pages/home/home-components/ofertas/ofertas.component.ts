import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {}

  navegar(pagina: string) {
    if (pagina === 'productos') {
      this.navCtrl.navigateForward([pagina, {opcion: 'ofertas'}]);
    } else {
      this.navCtrl.navigateForward(pagina);
    }
    // this.route.navigate(['mapa', {lugar: value.nombre}]);
  }

}
