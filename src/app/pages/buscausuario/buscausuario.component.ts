import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService, usuario } from "../../services/userservice/user.service";

@Component({
  selector: 'app-buscausuario',
  templateUrl: './buscausuario.component.html',
  styleUrls: ['./buscausuario.component.scss']
})
export class BuscausuarioComponent implements OnInit {

  users: usuario[] = []

  constructor(private active: ActivatedRoute, private _userse: UserService) {}

  ngOnInit(): void {

    this.active.params.subscribe(
      params => {
        this.users = this._userse.buscador( params['un'] )
      }
      
    )

  }

}
