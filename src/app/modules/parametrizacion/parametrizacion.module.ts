import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearMarcaComponent } from './marca/crear-marca/crear-marca.component';
import { EditarMarcaComponent } from './marca/editar-marca/editar-marca.component';
import { ListarMarcaComponent } from './marca/listar-marca/listar-marca.component';
import { EliminarMarcaComponent } from './marca/eliminar-marca/eliminar-marca.component';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { EliminarCategoriaComponent } from './categoria/eliminar-categoria/eliminar-categoria.component';
import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';


@NgModule({
  declarations: [
   CrearMarcaComponent,
   EditarMarcaComponent,
   ListarMarcaComponent,
   EliminarMarcaComponent,
   CrearCategoriaComponent,
   EditarCategoriaComponent,
   ListarCategoriaComponent,
   EliminarCategoriaComponent
  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrizacionModule { }