import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Planet } from '../planet.model';
import { PlanetService }  from '../planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.sass']
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPlanetId();
  }

  getPlanetId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanetWithId(id)
      .subscribe(planet => this.planet = planet);
  }

  goBack(): void {
    this.location.back();
  }

}