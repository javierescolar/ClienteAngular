import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public company:string = "Madisa Tecnología Ibérica";
  public loginUsernameText:string;
  public loginPassText:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private us:UserService
  ) {
    this.loginUsernameText="";
    this.loginPassText="";

  }

  ngOnInit() {
    console.log("Login inicializado");
  }

  loginOnSubmit(){
    console.log("==================");
    console.log(this.loginUsernameText);
    console.log("==================");
    console.log(this.loginPassText);
    console.log("CONEXION CON BACKEND...");

    this.us.login(this.loginUsernameText,this.loginPassText).subscribe(
      response => {
        var token = response.token
        console.log("---token---");
        console.log(token)
        if (token.length > 0 || token) {
          localStorage.setItem('token',token);
          this._router.navigate(['/home'])
        } else {

        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
