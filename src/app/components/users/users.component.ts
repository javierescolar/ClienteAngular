import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users:any;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private us:UserService
  ) { }

  ngOnInit() {
    console.log("Usercomponenet inicializado")
    this.users=this.getUsers();
  }


  getUsers(){
    this.us.getAllUsers().subscribe(
      response => {
        console.log(response)
        if(!response.users){
          console.log("No hay usuarios")
        } else {
          this.users=response.users;
        }
      },
      error=> {
        console.log("error en el subscribe")
        console.log(<any>error);
      }
    );
  }

}
