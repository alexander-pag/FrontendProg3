import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ImagenesProductoComponent } from './imagenes-producto/imagenes-producto.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    ImagenesProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
