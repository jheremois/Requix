import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  public formu: FormGroup;
  
  @Input() formulario: boolean

  constructor( private builder: FormBuilder, private coneta: HttpClient) {
    this.formBuilder();
  }

  ngOnInit(): void {
  }

  formBuilder(){
    this.formu = this.builder.group({
      name: ['', [Validators.required, Validators.min(3)]],
      job : ['', [Validators.required, Validators.min(3)]]
    })
  }

  envia(){
    //= this.formu.value

    this.coneta.post("https://reqres.in/api/users", this.formu.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
    
  }

}
