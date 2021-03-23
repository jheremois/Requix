import { Component, OnInit, Input } from '@angular/core';
import { usuario } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() theuser: usuario

  constructor() { }

  ngOnInit(): void { }

}
