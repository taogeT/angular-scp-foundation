import { _HttpClient } from '@delon/theme';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolveService implements Resolve<Article> {

  constructor(private http: _HttpClient, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article> | Observable<never> {
    const code = +route.paramMap.get('code');

    return this.http.get<Article>(`/article/${code}`).pipe(
      take(1),
      mergeMap(article => {
        if (article) {
          return of(article);
        } else {
          this.router.navigate(['/dashboard']);
          return EMPTY;
        }
      })
    );
  }
}
