import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientListData = []
  constructor(private clientS: ClientService) { 

  }

  ngOnInit(){
    this.clientListData = this.clientS.getClientListData();
  }

}
