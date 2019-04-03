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
  	page: number = 1;
	items: number = 10;

	/*
	planet$: Observable<Planet[]>;
    constructor(private planetService: PlanetService) {}
  	FETCHING DATA FROM ONE PAGE swapi.co(10 PLANETS ONLY)
  	fetchPlanet() {
      this.planet$ = this.planetService.fetchPlanet(1);
  	}
  	*/

	constructor(private planetService: PlanetService) { }

	ngOnInit() {
		this.getPlanet();
	}

	getPlanet(): void {
		this.planetService.getPlanet()
		.subscribe(planet => this.planet = planet);
	}

	setTo5(): void {
		this.items = 5;
		this.page = 1;
	}

	setTo10(): void {
		this.items = 10;
		this.page = 1;
	}

	setTo25(): void {
		this.items = 25;
		this.page = 1;
	}

	setTo100(): void {
		this.items = 100;
		this.page = 1;
	}
}