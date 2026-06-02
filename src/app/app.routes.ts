import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Peliculas } from './components/peliculas/peliculas';
import { Favoritos } from './components/favoritos/favoritos';

export const routes: Routes = [
    {   path: '', component: Home },
    {   path: 'peliculas', component: Peliculas },
    {   path: 'favoritos', component: Favoritos }
];
