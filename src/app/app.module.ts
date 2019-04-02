import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlanetService } from './planet.service';
import { PlanetComponent } from './planet/planet.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetSearchComponent } from './planet-search/planet-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetDetailComponent,
    PlanetSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }