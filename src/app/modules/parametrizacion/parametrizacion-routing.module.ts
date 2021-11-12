import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { EliminarCategoriaComponent } from './categoria/eliminar-categoria/eliminar-categoria.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { CrearMarcaComponent } from './marca/crear-marca/crear-marca.component';
import { EditarMarcaComponent } from './marca/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './marca/eliminar-marca/eliminar-marca.component';
import { ListarMarcaComponent } from './marca/listar-marca/listar-marca.component';

const routes: Routes = [
  {
    path: "crear-marca",
    component: CrearMarcaComponent
  },
  {
    path: "editar-marca",
    component: EditarMarcaComponent
  },
  {
    path: "listar-marca",
    component: ListarMarcaComponent
  },
  {
    path: "eliminar-marca",
    component: EliminarMarcaComponent
  },
  {
    path: "crear-categpria",
    component: CrearCategoriaComponent
  },
  {
    path: "editar-categoria",
    component: CrearCategoriaComponent
  },
  {
    path: "listar-categoria",
    component: ListarCategoriaComponent
  },
  {
    path: "eliminar",
    component: EliminarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }