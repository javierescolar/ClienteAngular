import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from '../../environments/environment';
import {UserService} from './user.service';

@Injectable()
export class ClientService {

  public url:string;

  constructor(
    private http:Http,
    private us:UserService
  ) {
    this.url = GLOBAL.urlApi;

  }


  getAllClients(){
    let token = this.us.getToken();
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization':token
    });

    return this.http.get(this.url + '/clients', {headers:headers})
      .map(res =>res.json());
  }

}
