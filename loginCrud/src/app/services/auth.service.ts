import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:4000/'

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<any>{
    return this.http.get(this.url+"usuario");
  }
  obtenerUno(id:string): Observable<any>{
    return this.http.get(this.url+'usuario/'+id);
  }
  Crear(user:any):Observable<any>{
    return this.http.post(this.url+'usuario',user);
  }
  Actualizar(user:any,id:string):Observable<any>{
    return this.http.put(this.url+'usuario/'+id,user)
  }
 
  Eliminar(id:string,):Observable<any>{
    return this.http.delete(this.url+'usuario/'+id)
  }
}