import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSeEncontroComponent } from './publico/errors/no-se-encontro/no-se-encontro.component';
import { InicioComponent } from './publico/general/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo:   "/inicio"
  },
  {
    path:"seguridad",
    loadChildren: () => import("./modules/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path:"producto",
    loadChildren: () => import("./modules/producto/producto.module").then(x => x.ProductoModule)
  },
  {
    path:"parametrizacion",
    loadChildren: () => import("./modules/parametrizacion/parametrizacion-routing.module").then(x => x.ParametrizacionRoutingModule)
  },
  {
    path:"usuario",
    loadChildren: () => import("./modules/usuario/usuario-routing.module").then(x => x.UsuarioRoutingModule)
  },
  {
    path:"**",
    component: NoSeEncontroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
