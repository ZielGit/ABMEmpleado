import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmcionComponent } from '../shared/mensaje-confirmcion/mensaje-confirmcion.component';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado: Empleado[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort: MatSort = <MatSort>{};

  constructor(private empleadoService: EmpleadoService, public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmcionComponent, {
      width: '350px',
      data: {mensaje: 'Esta seguro que desea eliminar el Empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
      }
    });
  }
}
