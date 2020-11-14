import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  noDatos: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.noDatos = true;
  }

  navegar() {
    this.navCtrl.navigateBack('home');
  }

  switch() {
    this.noDatos = !this.noDatos;
  }

}
