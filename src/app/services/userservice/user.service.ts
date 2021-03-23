import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios: usuario[]

  constructor(private conet: HttpClient) {

    this.conecta().subscribe(
      res => this.usuarios = res['data']
    )
  
  }

  // Brinda la conexion del API 

  conecta(){
    return this.conet.get('https://reqres.in/api/users')
  }

  // Busca entre arreglo de usuarios que retorna el API

  buscador( elUsuario: string ){

    let unUsuario: usuario[] = []
    elUsuario = elUsuario.toLocaleLowerCase()

    for( let use of this.usuarios){
      let name = use.first_name.toLocaleLowerCase()

      if( name.indexOf( elUsuario ) >= 0 ){
        unUsuario.push( use )
      }

    }

    return unUsuario

  }

}

export interface usuario {
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string
}