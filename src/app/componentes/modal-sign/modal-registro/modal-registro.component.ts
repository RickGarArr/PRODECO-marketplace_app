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
export class ModalRegistroComponent {

  public registerForm: FormGroup;
  public formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController) {
      this.registerForm = this.formBuilder.group({
        nombre: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]),
        apellidoPat: new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
        password2: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
      }, {
        validators: this.passwordsIguales('password', 'password2')
      });
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGrup: FormGroup) => {
      const pass1Control = formGrup.get(pass1Name);
      const pass2Control = formGrup.get(pass2Name);
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

  async verificarCorreo() {
    const verificarCorreo = await this.modalCtrl.create({
      component: VerificarCorreoComponent,
      id: 'verificar',
      componentProps: {
        usuario: this.registerForm.value
      }
    });
    verificarCorreo.present();

    await verificarCorreo.onWillDismiss().then(data => {
      if (data.role === 'salir') {
        this.modalCtrl.dismiss(null, 'salir', 'registrar');
      }
    });
  }

  cerrarModal() {
    this.modalCtrl.dismiss( null, null, 'registrar');
  }

  // Obtener valor en caso de ser tocado
  public untouched(campo: string): boolean {
    return this.registerForm.get(campo).untouched;
  }

  public invalid(campo: string): boolean {
    return this.registerForm.get(campo).invalid && this.registerForm.get(campo).touched;
  }

  passwordsDiferentes() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ((pass1 !== pass2) && pass2.touched) {
      return true;
    } {
      return false;
    }
  }
  
}
