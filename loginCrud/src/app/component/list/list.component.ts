import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listaUsuarios:User[]=[]
  id: string | null;

  constructor(private router:Router,private aRoute:ActivatedRoute, private servicio:AuthService){
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.buscarUsuarios()
  }

  buscarUsuarios(){
    this.servicio.obtenerTodos().subscribe(
      {
        next:(data)=>{
          this.listaUsuarios=data;
          console.log(this.listaUsuarios)

        },
        error:(error)=>{
          console.log(error)
        }
      }
    )
  }

  borrarUsuario(index:string){
    this.servicio.Eliminar(index).subscribe({
      complete:()=>{
        this.buscarUsuarios()

      },
      error:()=>{

      }
    })
  }


}
