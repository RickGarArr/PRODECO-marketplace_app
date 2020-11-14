import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Tienda } from '../../interfaces/interfaces';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  tiendas: Tienda[] = [];

  constructor(private dataService: ServiceService) { }

  ngOnInit() {
    this.dataService.getTiendas().subscribe( resp => {
      this.tiendas = resp;
      console.log(this.tiendas);
    });
  }

}
