import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as ArticlesModel from './actices.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private pageSize = 20;
  private baseUrl = `https://content.guardianapis.com`;
  private apiKey = '?api-key=087fc3e5-6aca-45c4-8984-fcd1752b32df';
  private newsFeedUrl = `${this.baseUrl}/search${this.apiKey}&page-size=${this.pageSize}`;

  constructor(private http: HttpClient) {}

  getNewsFeed(page: number, key: string) {
    return this.http.get<ArticlesModel.NewsFeedResponse>(`${this.newsFeedUrl}&page=${page}&q=${key}`);
  }

  getArticle(articleId: string) {
    return this.http.get<ArticlesModel.ArticleResponse>(`${this.baseUrl}/${articleId}${this.apiKey}`);
  }
}
