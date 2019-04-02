import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetComponent } from './planet/planet.component';
import { PlanetDetailComponent }  from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/planet', pathMatch: 'full' },
  { path: 'detail/:id', component: PlanetDetailComponent },
  { path: 'planet', component: PlanetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }