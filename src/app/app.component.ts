import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from './planet.model';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  //planet$: Observable<Planet[]>;

  //constructor(private planetService: PlanetService) {}

  //FETCHING DATA FROM ONE PAGE SWAPI(10 PLANETS ONLY)
  /*fetchPlanet() {
      this.planet$ = this.planetService.fetchPlanet(1);
  }*/

  title = 'List of Planets';
}