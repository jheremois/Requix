import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService, usuario } from "../../services/userservice/user.service";

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {


  ruta: usuario
  id: number

  constructor(private onroute: ActivatedRoute, private _cone: UserService) {

    this.onroute.params.subscribe(
      res => this.id = res['id'] - 1
    )

    this._cone.conecta().subscribe(
      res => {
        this.ruta = res['data'][this.id];
        console.log(res['data'][this.id]);
        
      }
    )

  }

  ngOnInit(): void {

  }

}
