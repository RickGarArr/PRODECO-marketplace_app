import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../interfaces/interfaces';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage {

  tiendas: Tienda[] = [];

  constructor() { }

}
