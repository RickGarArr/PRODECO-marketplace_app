import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-opciones',
  templateUrl: './popover-opciones.component.html',
  styleUrls: ['./popover-opciones.component.scss'],
})
export class PopoverOpcionesComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  opcion( opcion: string ){
    this.popoverCtrl.dismiss(null, opcion, 'opciones');
  } 
}
