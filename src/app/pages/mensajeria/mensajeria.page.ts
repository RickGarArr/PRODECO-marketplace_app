import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.page.html',
  styleUrls: ['./mensajeria.page.scss'],
})
export class MensajeriaPage implements OnInit {

  constructor( private navCrtl : NavController) { }

  ngOnInit() {
  }

  navcuenta(){
    this.navCrtl.navigateForward('/cuenta');
  }

}
