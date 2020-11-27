import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.scss'],
})
export class MetodoPagoComponent  {
  public metodo: string = "efectivo";

  constructor( private modalcrtl: ModalController) { }


  cerrarModal(){

    this.modalcrtl.dismiss(null, null, 'metodo-pago');

  }

  

}
