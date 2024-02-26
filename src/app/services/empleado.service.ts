import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 357123489,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'soltero'
    },
    {
      nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com', telefono: 658123489,
      sexo: 'Masculino', fechaIngreso: new Date('2019-04-27'), estadoCivil: 'soltero'
    }
  ];

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }
}
