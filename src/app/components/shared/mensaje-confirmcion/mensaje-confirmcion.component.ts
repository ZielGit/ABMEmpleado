import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-confirmcion',
  templateUrl: './mensaje-confirmcion.component.html',
  styleUrls: ['./mensaje-confirmcion.component.css']
})
export class MensajeConfirmcionComponent {
  mensaje: string;
  btn = 'aceptar';
  constructor(public dialogRef: MatDialogRef<MensajeConfirmcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.mensaje = data.mensaje;
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
