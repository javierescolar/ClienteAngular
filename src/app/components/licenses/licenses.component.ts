import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {LicenseService} from '../../services/license.service';
import {License} from '../../models/License';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.css']
})
export class LicensesComponent implements OnInit {

  public licenses:any;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private ls:LicenseService
  ) { }

  ngOnInit() {
    console.log("licensescomponent inicializado");
    this.licenses=this.getLicenses();
  }

  getLicenses(){
    this.ls.getAllLicenses().subscribe(
      response => {
        console.log(response)
        if(!response.licenses){
          console.log("No hay licenses")
        } else {
          this.licenses=response.licenses;
        }
      },
      error=> {
        console.log("error en el subscribe")
        console.log(<any>error);
      }
    );
  }

}
