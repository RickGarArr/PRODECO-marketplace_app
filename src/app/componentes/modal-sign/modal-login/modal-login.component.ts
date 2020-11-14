import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataLocalService } from '../../../services/data-local.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {

  usuario: FormGroup;

  constructor(
    private dlService: DataLocalService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController) {
      this.crearFormulario();
  }

  // id: entrar
  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss(null, null, 'entrar');
  }

  async registrar() {
    console.log(this.usuario.value);
    this.presentLoading();
    this.modalCtrl.dismiss(null, 'salir', 'entrar');
    this.navCtrl.navigateForward('home');
    this.dlService.guardarOmitirModalSign();
  }

  crearFormulario() {
    this.usuario = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Espere',
      duration: 1500
    });
    await loading.present();
  }
}
