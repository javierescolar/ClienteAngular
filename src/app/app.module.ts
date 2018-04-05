import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {APP_ROUTES} from './routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//services
import {UserService} from './services/user.service';
import {ClientService} from './services/client.service';
import {LicenseService} from './services/license.service';

//guards
import {IdentityGuard} from './guards/identity.guard';
//Componets
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    ClientsComponent,
    LicensesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [
    UserService,
    ClientService,
    LicenseService,
    IdentityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
