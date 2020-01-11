import { Component } from '@angular/core';
import { Article } from '@base/core/models/article.model';
import { NewsFeedService } from '@news/services/news-feed.service';
import { forkJoin, from, of } from 'rxjs';
import { concatMap, map, switchMap, toArray } from 'rxjs/operators';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
  })

export class FeedComponent {
    currentPage = 1;
    news: Article[];
    searchParam = '';

    constructor(private newsFeedService: NewsFeedService) {}

    ngOnInit(): void {
        this.changePage(this.currentPage);
    }

    loadNewsFeed(page: number): void {
        this.newsFeedService.getNewsFeed(page, this.searchParam)
            .subscribe(res => this.news = res.response.results);
    }

    changePage(pageNumber: number): void {
        this.currentPage = pageNumber;
        this.loadNewsFeed(this.currentPage);
    }

    filterNews(value: string): void {
        if (value === 'favorites') {
            this.test();
            return;
        }
        this.searchParam = value;
        this.loadNewsFeed(1);
    }

    test() {
        of(this.newsFeedService.favorites).pipe(
            switchMap(ids => from(ids).pipe(
                concatMap(id => forkJoin(
                  this.newsFeedService.getArticle(id)
                )),
                map(item => item[0].response.content),
                toArray(),
              ))
        ).subscribe(res => this.news = res);
    }
}