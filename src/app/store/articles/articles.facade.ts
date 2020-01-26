import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ArticlesActions from './articles.actions';
import * as fromArticles from './actices.interface';
import * as ArticlesSelector from './articles.selector';

@Injectable()
export class ArticlesFacade {
    newsFeed$ = this.store.select(ArticlesSelector.getNewsFeed);
    favorites$ = this.store.select(ArticlesSelector.getFavorites);
    currentArticle$ = this.store.select(ArticlesSelector.getCurrentArticle);
    currentPage$ = this.store.select(ArticlesSelector.getCurrentPage);

    constructor(private store: Store<fromArticles.ArticlesState>) {}

    loadNewsFeed(page: number, key: string) {
        this.store.dispatch(ArticlesActions.getNewsFeed({ page, key }));
    }

    addToFavorites(articleId: string) {
        this.store.dispatch(ArticlesActions.addToFavorites({ articleId }));
    }

    removeFromFavorites(articleId: string) {
        this.store.dispatch(ArticlesActions.removeFromFavorites({ articleId }));
    }

    getArticle(articleId: string) {
        this.store.dispatch(ArticlesActions.getArticle({ articleId }));
    }

    setCurrentPage(currentPage) {
        this.store.dispatch(ArticlesActions.setCurrentPage({ currentPage }));
    }

    getFavoriteArticles(favorites) {
        this.store.dispatch(ArticlesActions.getFavoriteArticle({ favoritesList: favorites }));
    }
}
