import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss'],
})
export class DireccionesComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'direcciones');
  }
}
