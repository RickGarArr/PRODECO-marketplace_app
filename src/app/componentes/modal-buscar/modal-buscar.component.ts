import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-buscar',
  templateUrl: './modal-buscar.component.html',
  styleUrls: ['./modal-buscar.component.scss'],
})

export class ModalBuscarComponent implements OnInit {

  constructor( private modalCrtl: ModalController) { }

  ngOnInit() {}

  cerrarModal(){

    this.modalCrtl.dismiss();
  }

}
