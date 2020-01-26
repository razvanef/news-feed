import { createAction, props } from '@ngrx/store';
import * as fromArticles from './actices.interface';

export const getNewsFeed = createAction(
    '[Article] Get news feed',
    props<{ page: number, key: string }>()
);

export const getNewsFeedSuccess = createAction(
    '[Article] Get news feed Success',
    props<{ newsFeed: fromArticles.NewsFeedResponse }>()
);

export const getNewsFeedFail = createAction(
    '[Article] Get news feed Fail',
    props<{ error: any }>()
);

export const addToFavorites = createAction(
    '[Article] Add article to favorites',
    props<{ articleId: string }>()
);

export const removeFromFavorites = createAction(
    '[Article] Remove article from favorites',
    props<{ articleId: string }>()
);

export const getArticle = createAction(
    '[Article] Get article',
    props<{ articleId: string }>()
);

export const getArticleSuccess = createAction(
    '[Article] Get article Success',
    props<{ article: fromArticles.ArticleResponse }>()
);

export const getArticleFail = createAction(
    '[Article] Get article Fail',
    props<{ error: any }>()
);

export const setCurrentPage = createAction(
    '[Article] Set news feed current page',
    props<{ currentPage: number}>()
);

export const getFavoriteArticle = createAction(
    '[Article] Get favorite articles',
    props<{ favoritesList: string[]}>()
);

export const getFavoriteArticleSuccess = createAction(
    '[Article] Get favorite articles Success',
    props<{ newsFeed: fromArticles.Article[] }>()
);

export const getFavoriteArticleFail = createAction(
    '[Article] Get favorite articles Fail',
    props<{ error: any }>()
);
