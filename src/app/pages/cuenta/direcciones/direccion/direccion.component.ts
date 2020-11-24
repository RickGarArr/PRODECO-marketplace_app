import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Direccion } from '../../../../interfaces/interfaces';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { PopoverOpcionesComponent } from '../popover-opciones/popover-opciones.component';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {

  @Input() direccion: Direccion = null;
  @Input() index: number = -1;
  
  direccionForm: FormGroup;
  operacion: string;

  constructor(
    private popoverCtrl: PopoverController,
    private direccionesService: DireccionesService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController) {
      this.crearFormulario();
    }

  ngOnInit() {
    if (this.direccion !== null) {
      this.operacion = 'editar';
      this.cargarFormulario(this.direccion);
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarDireccion() {
    this.direccionForm.disable();
    if (this.operacion === 'editar') {
      this.direccionesService.editarDireccion( this.index, this.direccionForm.value);
    } else {
      this.direccionesService.guardarDireccion(this.direccionForm.value);
    }
    this.cerrarModal();
  }

  eliminarDireccion() {
    this.direccionesService.borrarDireccion(this.index);
    this.cerrarModal();
  }

  async mostrarOpciones(event: Event) {
    const popoverOpciones = await this.popoverCtrl.create({
      component: PopoverOpcionesComponent,
      id: 'opciones',
      event
    });

    popoverOpciones.present();
    const opcPopover = await popoverOpciones.onDidDismiss();
    
    switch (opcPopover.role) {
      case 'editar':
        this.direccionForm.enable();
        break;
      case 'eliminar':
        this.eliminarDireccion();
        break;
      case 'principal':
        this.direccionesService.definirPrincipal(this.index);
        this.cerrarModal();
    }
  }

  crearFormulario() {
    this.direccionForm = this.formBuilder.group({
      contacto: new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required])
      }),
      domicilio: new FormGroup({
        cp: new FormControl('', [Validators.required]),
        colonia: new FormControl('', [Validators.required]),
        calle: new FormControl('', [Validators.required]),
        numInt: new FormControl(''),
        numExt: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        entreCalle1: new FormControl('', [Validators.required]),
        entreCalle2: new FormControl('', [Validators.required])
      })
    });
  }

  cargarFormulario( direccion: Direccion) {
    this.direccionForm.disable();
    this.direccionForm.setValue({
      contacto: {
        nombre: direccion.contacto.nombre,
        apellido: direccion.contacto.apellido,
        telefono: direccion.contacto.telefono
      },
      domicilio: {
        cp: direccion.domicilio.cp,
        colonia: direccion.domicilio.colonia,
        calle: direccion.domicilio.calle,
        numInt: direccion.domicilio.numInt,
        numExt: direccion.domicilio.numExt,
        descripcion: direccion.domicilio.descripcion,
        entreCalle1: direccion.domicilio.entreCalle1,
        entreCalle2: direccion.domicilio.entreCalle2
      }
    });
  }
}
