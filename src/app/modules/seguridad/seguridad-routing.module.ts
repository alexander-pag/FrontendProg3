import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:"inicio-sesion",
    component: InicioSesionComponent
  },
  {
    path:"cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path:"cambiar-clave",
    component: CambiarClaveComponent
  },
  {
    path:"recuperar-clave",
    component: RecuperarClaveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
