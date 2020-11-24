import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  
}
