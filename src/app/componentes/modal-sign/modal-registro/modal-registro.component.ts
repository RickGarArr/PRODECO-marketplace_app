import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

@Component({
  selector: 'app-modal-rregistro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss'],
})
export class ModalRegistroComponent implements OnInit{

  formRegistro: FormGroup;

  constructor(
    private ab: InAppBrowser,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController) {
      this.crearFormulario();
  }

  // id: registrar
  ngOnInit() {
  }

  async verificarCorreo() {
    const verificarCorreo = await this.modalCtrl.create({
      component: VerificarCorreoComponent,
      id: 'verificar',
      componentProps: {
        email: this.formRegistro.get('email').value,
        usuario: this.formRegistro.value,
      }
    });
    verificarCorreo.present();

    await verificarCorreo.onDidDismiss().then( data => {
      if (data.role === 'salir'){
        this.modalCtrl.dismiss(null, 'salir', 'registrar');
      }
    });
  }

  cerrarModal() {
    this.modalCtrl.dismiss( null, null, 'registrar');
  }

  // Obtener valor en caso de ser tocado
  public untouched(campo: string): boolean {
    return this.formRegistro.get(campo).untouched;
  }

  public invalid(campo: string): boolean {
    return this.formRegistro.get(campo).invalid && this.formRegistro.get(campo).touched;
  }
  // -----------------------------------------


  crearFormulario() {
    this.formRegistro = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      curp: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  abrirNavegador() {
    this.ab.create('https://www.gob.mx/curp/', '_system');
  }

}
