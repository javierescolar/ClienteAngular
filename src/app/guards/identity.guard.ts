import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable()
export class IdentityGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _userService : UserService
  ) {

  }

  canActivate(){
    var identity = this._userService.getToken();
    if(identity==null){
      return true;
    } else{
      this._router.navigate(['/home']);
      return false;
    }
  }
}
