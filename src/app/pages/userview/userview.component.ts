import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { UserService, usuario } from "../../services/userservice/user.service";

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {


  ruta: usuario
  id: number

  constructor(private onroute: ActivatedRoute, private _cone: UserService, private coneta: HttpClient) {

    this.onroute.params.subscribe(
      res => this.id = res['id'] - 1
    )

    this._cone.conecta().subscribe(
      res => {

        this.ruta = res['data'][this.id];
        //console.log(res['data'][this.id]);
        
      }
    )

  }

  borra(){
    //= this.formu.value

    this.coneta.delete("https://reqres.in/api/2").subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
      
    )
    
  }

  ngOnInit(): void {

  }

}
