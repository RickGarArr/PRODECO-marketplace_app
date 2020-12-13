import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController) {
      this.loginForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
      });
    }
  
  async login() {
    this.authService.login(this.loginForm.value);    
    console.log(this.loginForm.value);
    
    // this.modalCtrl.dismiss(null, 'salir', 'entrar');
    // this.navCtrl.navigateForward('home');
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere',
      duration: 1500
    });
    await loading.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'entrar');
  }
}
