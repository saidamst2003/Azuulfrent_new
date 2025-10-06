import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AtelierComponent } from './atelier/atelier';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'atelier', component: AtelierComponent } ,
  { path: 'login', component: LoginComponent } ,
  { path: 'register', component: RegisterComponent } ,
];


