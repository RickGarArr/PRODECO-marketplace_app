import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public registrado;
    
    constructor(
        private storage: Storage ) {
        this.verificarUsuario();
    }

    async logIn(user) {
        console.log(user);
        const usuario = await this.storage.get('usuario');
        if (usuario.email !== user.email) {
            return 'El email es incorrecto'
        }
        if (usuario.password1 !== user.password) {
            return 'El Password es incorrecto'
        }

    }
    async signUp(user) {
        console.log(user);
        await this.storage.set('usuario', user);
        return true;
    }

    async verificarUsuario() {
        const usuario = await this.storage.get('usuario');
        if (usuario) {
            this.registrado = true;
        } else {
            this.registrado = false;
        }
    }
}