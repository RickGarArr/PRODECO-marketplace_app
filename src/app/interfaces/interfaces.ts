export interface Tienda {
    idTienda: number;
    nombre: string;
    ubicacion: string;
    productos: Producto[];
}

export interface Cuenta {
    nombre: string;
    apellidos: string;
    correo: string;
    direccion: string;
    descripcionCasa: string;
    compras: any[];
  }

export interface Producto {
    idproducto: number;
    nombre: string;
    precio: number;
    cantidad: number;
}

export interface Direccion {
    contacto: Contacto;
    domicilio: Domicilio;
    principal: boolean;
}

export interface Contacto {
    apellido: string;
    nombre: string;
    telefono: string;
}

export interface Domicilio {
    calle: string;
    colonia: string;
    cp: string;
    descripcion: string;
    entreCalle1: string;
    entreCalle2: string;
    numExt: string;
    numInt: string;
}
// --------------------------------------------------------------------------------
export interface RegisterForm {
    nombre: string;
    apellidoPat: string;
    email: string;
    telefono: string;
    password: string;
}
export interface LoginForm {
    email: string;
    password: string
}