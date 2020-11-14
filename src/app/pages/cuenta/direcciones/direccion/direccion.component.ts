import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Direccion } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {

  @Input() data: Direccion;

  direccion: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController) {
      this.crearFormulario();
    }

  ngOnInit() {
    if (this.data !== undefined) {
      this.cargarFormulario(this.data);
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarDireccion() {
    this.direccion.disable();
    console.log(this.direccion.value);
    this.modalCtrl.dismiss();
  }

  editarDireccion(accion?: string) {
    if (accion === 'guardar') {
      this.guardarDireccion();
    } else {
      this.direccion.enabled ? this.cargarFormulario(this.data) : this.direccion.enable();
    }
  }

  crearFormulario() {
    this.direccion = this.formBuilder.group({
      contacto: new FormGroup({
        nombre: new FormControl(),
        apellido: new FormControl(),
        telefono: new FormControl()
      }),
      domicilio: new FormGroup({
        cp: new FormControl(),
        colonia: new FormControl(),
        calle: new FormControl(),
        numInt: new FormControl(),
        numExt: new FormControl(),
        descripcion: new FormControl(),
        entreCalle1: new FormControl(),
        entreCalle2: new FormControl()
      })
    });
  }

  cargarFormulario( value: Direccion) {
    this.direccion.disable();
    this.direccion.setValue({
      contacto: {
        nombre: value.contacto.nombre,
        apellido: value.contacto.apellido,
        telefono: value.contacto.telefono
      },
      domicilio: {
        cp: value.domicilio.cp,
        colonia: value.domicilio.colonia,
        calle: value.domicilio.calle,
        numInt: value.domicilio.numInt,
        numExt: value.domicilio.numExt,
        descripcion: value.domicilio.descripcion,
        entreCalle1: value.domicilio.entreCalle1,
        entreCalle2: value.domicilio.entreCalle2
      }
    });
  }
}
