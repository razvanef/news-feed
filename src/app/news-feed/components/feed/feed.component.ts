import { Component } from '@angular/core';
import { Article } from '@base/core/models/article.model';
import { ArticlesFacade } from '@store/articles/articles.facade';


@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
  })

export class FeedComponent {
    currentPage: number;
    news: Article[];
    searchParam = '';
    newsFeed$ = this.articlesFacade.newsFeed$;
    favorites: string[];

    constructor(private articlesFacade: ArticlesFacade) {}

    ngOnInit(): void {
        this.articlesFacade.currentPage$.subscribe(page => {
            this.currentPage = page;
            this.loadNewsFeed(page);
        });
        this.articlesFacade.favorites$.subscribe(res => {
            this.favorites = res;
        });
    }

    loadNewsFeed(page: number): void {
        this.articlesFacade.loadNewsFeed(page, this.searchParam);
    }

    filterNews(value: string): void {
        if (value === 'favorites') {
            this.articlesFacade.getFavoriteArticles(this.favorites);
            return;
        }
        this.searchParam = value;
        this.loadNewsFeed(1);
    }
}
