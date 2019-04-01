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
  planet$: Observable<Planet[]>;

  constructor(private planetService: PlanetService) {}

  fetchPlanet() {
    this.planet$ = this.planetService.fetchPlanet();
  }

  title = 'List of Planets';
}