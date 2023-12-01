import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LinkCarComponent } from './link-car/link-car.component';
import { HomeComponent } from './home/home.component';
import { DetailedCarInfoComponent } from './detailed-car-info/detailed-car-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'link-car', component: LinkCarComponent },
  { path: 'detailed-car-info', component: DetailedCarInfoComponent },
];
