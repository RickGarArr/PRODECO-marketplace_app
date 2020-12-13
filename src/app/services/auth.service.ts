import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { LoginForm, RegisterForm } from '../interfaces/interfaces';
import { tap } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor( private http: HttpClient, private storage: Storage ) {}

    signIn( formData: RegisterForm ){
        this.http.post(`${base_url}/consumidores/register`, formData).subscribe( (resp: any) => {
            this.storage.set('token', resp.token);
        }, err => {
            console.log(err);
            
        });
    }

    login( formData: LoginForm) {
        this.http.post(`${base_url}/auth/consumidor/login`, formData).subscribe( (resp: any) => {
            this.storage.set('token', resp.token);
        }, errors => {
            console.log(errors);
        });
    }
}