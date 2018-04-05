import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients:any;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private cs:ClientService
  ) { }

  ngOnInit() {
    console.log("clientscomponent inicializado");
    this.clients=this.getClients();
  }

  getClients(){
    this.cs.getAllClients().subscribe(
      response => {
        console.log(response)
        if(!response.clients){
          console.log("No hay clients")
        } else {
          this.clients=response.clients;
        }
      },
      error=> {
        console.log("error en el subscribe")
        console.log(<any>error);
      }
    );
  }

}
