import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [{}];

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'sign-up',
      component: RegisterPageComponent
    }],
  },
];
