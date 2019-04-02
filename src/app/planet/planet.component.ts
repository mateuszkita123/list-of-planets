import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from '../planet.model';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.sass']
})

export class PlanetComponent implements OnInit {
  	planet: Planet[];

	constructor(private planetService: PlanetService) { }

	ngOnInit() {
		this.getPlanet();
	}

	getPlanet(): void {
		this.planetService.getPlanet()
		.subscribe(planet => this.planet = planet);
	}
}