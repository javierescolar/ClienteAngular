import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../../environments/environment';

@Injectable()
export class UserService {

  public url:string;

  constructor(private http:Http) {
    this.url = GLOBAL.urlApi;
  }


  login(username,password){
    let params = JSON.stringify({
      username:username,
      password:password
    });

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url + '/login', params, {headers:headers})
      .map(res =>res.json());
  }


  getToken(){
    let token = localStorage.getItem('token');
    return (token!=undefined)?token:null;
  }


  getAllUsers(){
    let token = this.getToken();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization':token
    });

    return this.http.get(this.url + '/users', {headers:headers})
      .map(res =>res.json());
  }





}
