import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  formulario:FormGroup;
  id: string|null;
  tituloFormulario:string="Registrar usuario"
  botonGuardar:string="Registrar"
  botonOculto:boolean=true

  constructor(private fb:FormBuilder ,private router:Router,private aRoute:ActivatedRoute, private servicio:AuthService){
    this.formulario=this.fb.group({
      name:[],
      email:[],
      password:[]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    if (this.id != null){
      this.tituloFormulario="Editar usuario"
      this.botonOculto=false;
      this.botonGuardar="Guardar"
      this.servicio.obtenerUno(this.id).subscribe({
        next:(data)=>{
          this.formulario.setValue({
            name:data.name,
            email:data.email,
            password:data.password
          })
        }
      })
    }else{this.botonOculto=true;}

    
  }
  onRegister(){
    const USUARIO: User = {
      name:this.formulario.get('name')?.value,
      email:this.formulario.get('email')?.value,
      password:this.formulario.get('password')?.value
    }
    console.log(USUARIO)
    if (this.id != null){ 





      this.servicio.Actualizar(USUARIO,this.id).subscribe({
        next: (data)=>{
          console.log(data)
          this.formulario.reset()
          this.router.navigate(['/list'])
        },
        error: (e)=>{
          console.log(e);
          this.formulario.reset()
        },
      }
      )
    }else{
    this.servicio.Crear(USUARIO).subscribe({
      next: (data)=>{
        console.log(data)
        this.formulario.reset()
        alert("usuario creado")
      },
      error: (e)=>{
        console.log(e);
        this.formulario.reset()
      },
    }
    )}
  }
    
  }

