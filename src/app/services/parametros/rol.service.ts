import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from 'src/app/config/datos-generales';
import { RolModel } from 'src/app/parametros/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url: string = DatosGenerales.URL_MS_USUARIO;
  constructor(
    private http: HttpClient
  ) { }

  
  GetRecordList():Observable<RolModel[]>{
   return this.http.get<RolModel[]>(`${this.url}/rols`)

  }

}
