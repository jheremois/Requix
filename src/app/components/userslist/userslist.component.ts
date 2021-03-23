import { Component, OnInit } from '@angular/core';
import { UserService, usuario } from "../../services/userservice/user.service";

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  users: usuario[]

  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this._user.conecta().subscribe(
      res => {
        this.users = res['data'];
      }
    )
  }

}