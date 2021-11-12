import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/app/config/datos-generales';
import { CredencialesModel } from 'src/app/parametros/credenciales.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = DatosGenerales.URL_MS_USUARIO

  constructor(
    private http: HttpClient
  ) { }
 
 
  Login(modelo: CredencialesModel):Observable<any>{
      return this.http.post(`${this.url}/identificar-usuario`,{
      usuario: modelo.usuario,
      clave: modelo.clave,
      rol: modelo.rol
      });
  }
}
