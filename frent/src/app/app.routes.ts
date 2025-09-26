import { Routes } from '@angular/router';
import { Atelier } from './atelier/atelier';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'atelier', component: Atelier }
];

