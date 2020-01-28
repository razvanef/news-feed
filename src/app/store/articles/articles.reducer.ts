import { createReducer, on } from '@ngrx/store';

import * as ArticlesModel from './actices.interface';
import * as ArticleActions from './articles.actions';

export const initialState: ArticlesModel.ArticlesState = {
    newsFeed: [],
    favorites: [],
    currentArticle: ArticlesModel.EmptyArticle,
    currentPage: 1,
};

export const articleReducer = createReducer(
    initialState,
    on(
        ArticleActions.getNewsFeedSuccess,
        (state, { newsFeed }) => ({
            ...state,
            newsFeed: newsFeed.response.results,
        })
    ),
    on(
        ArticleActions.addToFavorites,
        (state, { articleId }) => ({
            ...state,
            favorites: [...state.favorites, articleId]
        })
    ),
    on(
        ArticleActions.removeFromFavorites,
        (state, { articleId }) => ({
            ...state,
            favorites: state.favorites.filter(id => id !== articleId)
        })
    ),
    on(
        ArticleActions.getArticleSuccess,
        (state, { article }) => ({
            ...state,
            currentArticle: article.response.content
        })
    ),
    on(
        ArticleActions.setCurrentPage,
        (state, { currentPage }) => ({
            ...state,
            currentPage
        })
    ),
    on(
        ArticleActions.getFavoriteArticleSuccess,
        (state, { newsFeed }) => ({
            ...state,
            newsFeed
        })
    )
);
