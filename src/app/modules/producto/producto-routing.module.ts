import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';

const routes: Routes = [
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "editar-producto",
    component: EditarProductoComponent
  },
  {
    path: "listar-producto",
    component: ListarProductoComponent
  },
  {
    path: "eliminar-producto",
    component: EliminarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
