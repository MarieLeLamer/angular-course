import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page-component/landing-page-component';

export const routes: Routes = [
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./face-snaps/face-snaps-routing.module').then(
        (m) => m.FaceSnapsRoutingModule
      ),
  },
  { path: '', component: LandingPageComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.route').then((m) => m.AUTH_ROUTES),
  },
];
