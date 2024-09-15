import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'newGame',
    pathMatch: 'full',
    loadComponent: () =>
      import('./new-game/new-game.component').then((m) => m.NewGameComponent),
  },
];
