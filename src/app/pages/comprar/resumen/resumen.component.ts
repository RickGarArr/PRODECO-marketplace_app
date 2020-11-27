import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/componentes/pop-over/pop-over.component';
import { Direccion , Contacto, Domicilio} from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MetodoPagoComponent } from '../metodo-pago/metodo-pago.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent implements OnInit {

  @Input() direccion: Direccion = null;
  @Input() opcionEntrega: string;

  public contacto: Contacto;
  public domicilio: Domicilio;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private popover: PopoverController,
    private authService: AuthService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    const { nombre, apellido, email } = this.authService.registrado;
    if (this.direccion && this.opcionEntrega === 'domicilio') {
      this.contacto = this.direccion.contacto;
      this.domicilio = this.direccion.domicilio;
    } else if (this.direccion && this.opcionEntrega === 'sucursal') {
      this.contacto = this.direccion.contacto;
      this.domicilio = {
        calle: '20 de Noviembre',
        colonia: 'Zona Centro',
        cp: '34235',
        numExt: '213',
        descripcion: '',
        entreCalle1: 'Fco. I. Madero',
        entreCalle2: 'Victoria',
        numInt: '32'
      }
    } else if (!this.direccion) {
      this.contacto = {
        nombre,
        apellido,
        telefono: email
      }
      this.domicilio = {
        calle: '20 de Noviembre',
        colonia: 'Zona Centro',
        cp: '34235',
        numExt: '213',
        descripcion: '',
        entreCalle1: 'Fco. I. Madero',
        entreCalle2: 'Victoria',
        numInt: '32'
      }
    }
  }

  async popoverOpciones(event) {
    const popoverOpciones = await this.popover.create({
      component: PopOverComponent,
      componentProps: {
        type: 'opciones-destinatario'
      },
      id: 'popover',
      event,
    });

    await popoverOpciones.present();
    let datos = await popoverOpciones.onDidDismiss();
    if (datos.role === 'editar') {
      this.mostrarAlert();
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: true,
      header: 'Editar',
      inputs: [
        {
          label: 'Nombre',
          name: 'nombre',
          placeholder: 'Nombre',
          type: 'text'
        },
        {
          label: 'Apellido',
          name: 'apellido',
          placeholder: 'Apellido',
          type: 'text'
        },
        {
          label: 'telefono',
          name: 'telefono',
          placeholder: 'Telefono',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            this.contacto.nombre = data.nombre;
            this.contacto.apellido = data.apellido;
            this.contacto.telefono = data.telefono;
          }
        },
      ]
    });
    await alert.present();
  }
  
  async alertaError() {
    const alerErr = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Datos invalidos',
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });
  }

  async comprar() {
    const pago =  await this.modalCtrl.create( {
      component: MetodoPagoComponent,
      id: 'metodo-pago',
      componentProps: {}
    });
    pago.present();
    
  }
}
