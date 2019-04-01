import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Planet } from './planet.model';

@Injectable()
export class PlanetService {
	swapiUrl = 'https://swapi.co/api/';

	constructor(private _http: HttpClient) {}

	getByPage(page: number): string {
	  if (page) { return '&page=' + page; } else { return ''; }
	}

	fetchPlanet(page?: number): Observable<Planet[]> {
		return this._http.get<Planet[]>(`${this.swapiUrl}planets?format=json${this.getByPage(page)}`)
		.pipe(
			map(resp => resp['results']),
			catchError(this.handleError)
		);
	}

    private handleError(error: HttpErrorResponse) {
	    if (error.error instanceof ErrorEvent) {
	      // A client-side or network error occurred. Handle it accordingly.
	      console.error(`An error occurred:`, error.error.message);
	    } else {
	      // The backend returned an unsuccessful response code.
	      // The response body may contain clues as to what went wrong,
	      console.error(
	        `Backend returned code ${error.status}, ` +
	        `body was: ${error.error}`);
	    }
	    // return an observable with a user-facing error message
	    return throwError(
	      `Something bad happened; please try again later.`);
	  }
}