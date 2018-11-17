import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

import { Series } from './series.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesResolveService implements Resolve<Series> {

  constructor(private http: _HttpClient, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Series> | Observable<never> {
    const area = route.paramMap.get('area');
    const code = +route.paramMap.get('code');

    return this.http.get<Series>(`/series/${area}/${code}`).pipe(
      take(1),
      mergeMap(series => {
        if (series) {
          return of(series);
        } else {
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      })
    );
  }
}
