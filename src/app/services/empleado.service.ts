import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 357123489,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com', telefono: 658123489,
      sexo: 'Masculino', fechaIngreso: new Date('2019-04-27'), estadoCivil: 'Soltero'
    }
  ];

  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }
}
