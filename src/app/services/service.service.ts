import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda, Cuenta, Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient ) { }

  getAnuncios() {
    return this.http.get<any[]>('../assets/json/anuncios.json');
  }

  getTiendas() {
    return this.http.get<Tienda[]>('../assets/json/tiendas.json');
  }

  getCuenta() {
    return this.http.get<Cuenta>('../assets/json/cuenta.json');
  }
}
