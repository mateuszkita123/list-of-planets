import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Planet } from './planet.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PlanetService {

	private planetUrl = 'api/planet';

	//swapiUrl = 'https://swapi.co/api/planets';

	constructor(private http: HttpClient) {}

	getPlanet(): Observable<Planet[]> {
	  return this.http.get<Planet[]>(this.planetUrl)
	  	.pipe(
          catchError(this.handleError<Planet[]>('getPlanet', []))
      );
	}

	/** GET planet by id. Return `undefined` when id not found */
	getPlanetNo404<Data>(id: number): Observable<Planet> {
	  const url = `${this.planetUrl}/?id=${id}`;
	  return this.http.get<Planet[]>(url)
	    .pipe(
	      map(pl => pl[0]), // returns a {0|1} element array
	      catchError(this.handleError<Planet>(`getPlanet id=${id}`))
	    );
	}

	getPlanetWithId(id: number): Observable<Planet> {
	  const url = `${this.planetUrl}/${id}`;
  	  return this.http.get<Planet>(url).pipe(
        catchError(this.handleError<Planet>(`getPlanet id=${id}`))
    	);
	}

	/* GET planets whose name contains search term */
	searchPlanet(term: string): Observable<Planet[]> {
	  if (!term.trim()) {
	    // if not search term, return empty planet array.
	    return of([]);
	  }
	  return this.http.get<Planet[]>(`${this.planetUrl}/?name=${term}`).pipe(
	    catchError(this.handleError<Planet[]>('searchHeroes', []))
	  );
	}
	
	private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
 
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    
    //ERROR HANDLER FOR fetchPlanet FUNCTION
    /*private handleError(error: HttpErrorResponse) {
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
	}*/
}