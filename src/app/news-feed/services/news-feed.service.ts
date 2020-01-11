import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@base/core/models/article.model';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private pageSize = 20;
  private baseUrl = `https://content.guardianapis.com`;
  private apiKey = '?api-key=087fc3e5-6aca-45c4-8984-fcd1752b32df';
  private newsFeedUrl = `${this.baseUrl}/search${this.apiKey}&page-size=${this.pageSize}`;
  favoritesList: string[];

  constructor(private http: HttpClient) {
    this.favoritesList = this.getFavorites();
  }

  getNewsFeed(page: number, key: string) {
    return this.http.get<Article[]>(`${this.newsFeedUrl}&page=${page}&q=${key}`)
      .pipe(
        catchError(this.handleError())
      );
  }

  getArticle(articleId: string) {
    return this.http.get<Article>(`${this.baseUrl}/${articleId}${this.apiKey}`)
      .pipe(
        catchError(this.handleError())
      );
  }

  addToFavorites(articleId: string): void {
    this.favoritesList = [...this.favoritesList, articleId];
    window.localStorage.setItem('favorites', this.favoritesList.toString());
  }

  getFavorites(): Array<string> {
    const favoritesList = window.localStorage.getItem('favorites');
    this.favoritesList = favoritesList ? favoritesList.split(',') : [];
    return this.favoritesList;
  }

  removeFromFavorites(articleId: string): void {
    this.favoritesList.splice(this.favoritesList.indexOf(articleId), 1);
    window.localStorage.setItem('favorites', this.favoritesList.toString());
  }

  get favorites() {
    return this.favoritesList;
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      console.error(res);
      return of(requestData as T);
    };
  }
}
