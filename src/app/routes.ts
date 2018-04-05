import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {ClientsComponent} from './components/clients/clients.component';
import {LicensesComponent } from './components/licenses/licenses.component';

import {IdentityGuard} from './guards/identity.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'licenses', component: LicensesComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);
