import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AtelierComponent } from './atelier/atelier';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'atelier', component: AtelierComponent } ,

];


