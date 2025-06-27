import { PageMarginBox } from './../../../03-gifs-app/node_modules/lightningcss/node/ast.d';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Pipes Basicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path: 'number',
    title: 'Pipes Numbers',
    loadComponent: () => import('./pages/number-page/number-page.component')
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];
