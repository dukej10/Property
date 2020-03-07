import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup; /* grupo de validación de formulario */

  constructor(private fb: FormBuilder, private userService: UserService) { 

  }

  email: string = '';
  password: string = '';
  logged: boolean = false;


  ngOnInit() { 
  }
  

  onLoginBtnClick(): void{
    this.userService.loginUser(this.email, this.password).subscribe(item => {
      console.log(item.id);
      this.userService.saveToken(item.id);
      this.userService.saveUserInformation(item.user);
      location.reload();
    });
  }


}
