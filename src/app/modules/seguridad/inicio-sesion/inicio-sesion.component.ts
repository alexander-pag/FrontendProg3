import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosGenerales } from 'src/app/config/datos-generales';
import { CredencialesModel } from 'src/app/parametros/credenciales.model';
import { RolModel } from 'src/app/parametros/rol.model';
import { RolService } from 'src/app/services/parametros/rol.service';
import { MD5 } from 'crypto-js'
import { SeguridadService } from 'src/app/services/parametros/seguridad.service';

//declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  
  recordList: RolModel[] = []
  form: FormGroup = new FormGroup({})

  constructor(
    private service: RolService,
    private fb: FormBuilder,
    private seguridadService: SeguridadService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
    this.CrearFormulario();
  }

  CrearFormulario(){
    this.form = this.fb.group({
      rolId: ['', [Validators.required]],
      usuario: ["", [Validators.required, Validators.email, Validators.minLength(DatosGenerales.EMAIL_MIN_LENGHT)]],
      clave: ["", [Validators.required, Validators.minLength(DatosGenerales.CLAVE_MIN_LENGHT)]]
    })
  }

  Login(){
   if(this.form.invalid){
  
   }else{

    //OpenGeneralMessageModal("Mensaje del sistema", "Bienvenido") 
     let modelo = new CredencialesModel();
     modelo.usuario = this.GetForm.usuario.value;
     modelo.clave = MD5(this.GetForm.clave.value).toString();
     modelo.rol = this.GetForm.rolId.value
     console.log(modelo.rol);
     this.seguridadService.Login(modelo).subscribe({
      next: (data: any) =>{
       console.log(data);
       
      } ,
      error: (error: any) =>{

      }      
     })    
   }
   
  }
  

  get GetForm() {
    return this.form.controls;
}
GetRecordList(){  
  this.service.GetRecordList().subscribe({
    next: (data: RolModel[]) => {
      this.recordList = data;
    }
  });
}
}