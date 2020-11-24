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

interface Contacto {
    apellido: string;
    nombre: string;
    telefono: string;
}

interface Domicilio {
    calle: string;
    colonia: string;
    cp: string;
    descripcion: string;
    entreCalle1: string;
    entreCalle2: string;
    numExt: string;
    numInt: string;
}