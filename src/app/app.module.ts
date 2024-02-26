import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmcionComponent } from './components/shared/mensaje-confirmcion/mensaje-confirmcion.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,
    NavbarComponent,
    MensajeConfirmcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
