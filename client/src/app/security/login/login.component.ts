import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup; /* grupo de validación de formulario */

  constructor(private fb: FormBuilder) { 

  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30), Validators.email]],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(15)]
    });
  }

  ngOnInit() {
    this.fgValidationBuilder(); 
  }
  
  loginEvent(){
    if (this.fgValidation.invalid){
      alert("Datos Inválidos");
    }else{
      alert("yendo al login");
    }
  }

  get fgv(){
    return this.fgValidation.controls;
  }

}
