import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routing').then(m => m.reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routing'),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routing').then(m => m.CountryRoutes),
  },
   {
    path: '**',
    redirectTo: 'reactive',
  }
];
