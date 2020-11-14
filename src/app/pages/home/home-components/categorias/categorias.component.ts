import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  constructor( private navCrtl: NavController) { }

  ngOnInit() {}

  onClick(data) {
    console.log('index :>> ', data);
  }

  cargarCategorias( ){

    this.navCrtl.navigateForward('categorias');

  }
}
