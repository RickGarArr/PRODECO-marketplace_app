import { Injectable } from '@angular/core';
import { Storage } from'@ionic/storage';
import { Direccion } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DireccionesService {

    public direcciones: Direccion[] = [];

    constructor (private storage: Storage ) {
        this.cargarDirecciones();
    }

    async guardarDireccion(direccion: Direccion) {
        direccion.principal = false;
        this.direcciones.unshift( direccion );
        this.storage.set('direcciones', this.direcciones );
    }

    async cargarDirecciones() {
        const direcciones =  await this.storage.get('direcciones');
        if (direcciones) {
            this.direcciones = direcciones;
        }
    }

    async editarDireccion(index: number, direccion: Direccion) {
        this.direcciones[index] = direccion;
        this.storage.set('direcciones', this.direcciones);
    }

    async borrarDireccion( index: number ) {
        this.direcciones.splice(index, 1);
        this.storage.set('direcciones', this.direcciones);
    }

    async definirPrincipal( index: number ){
        this.direcciones.forEach((direccion) => {
            if (direccion.principal === true) {
                direccion.principal = false;
            }
        });
        this.direcciones[index].principal=true;
        this.storage.set('direcciones', this.direcciones);
        console.log(this.direcciones);
    }
}