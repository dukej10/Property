import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/models/client.model';
import { ClientModule } from 'src/app/client/client.module';
import { UserModel } from 'src/app/models/user.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private catService: UserService, private router: Router, private userService: UserService, private clientS: ClientService) { 
  }

  

}  


