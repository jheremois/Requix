import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/userservice/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  form = false

  constructor(private lista: UserService, private route: Router) { }

  openForm(){

    this.form = !this.form

  }

  searchu(esto: string){
    this.route.navigate( ['/ansu', esto] )
    this.lista.buscador(esto)
  }

  ngOnInit(): void {
  }

}
