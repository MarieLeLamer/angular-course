import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list';
import { LandingPageComponent } from './landing-page-component/landing-page-component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap';
import { NewFaceSnapComponent } from './new-face-snap-component/new-face-snap-component';

export const routes: Routes = [
    {path : 'facesnaps', component : FaceSnapListComponent},
    {path : '', component : LandingPageComponent},
    {path : 'facesnaps/:id', component : SingleFaceSnapComponent}, 
    {path : 'create', component : NewFaceSnapComponent}
];
