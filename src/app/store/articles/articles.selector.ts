import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ArticlesModel from './actices.interface';

const getArticlesState = createFeatureSelector<ArticlesModel.ArticlesState>(ArticlesModel.ArticlesFeatureKey);

export const getNewsFeed = createSelector(
    getArticlesState,
    state => state.newsFeed,
);

export const getFavorites = createSelector(
    getArticlesState,
    state => state.favorites,
);

export const getCurrentArticle = createSelector(
    getArticlesState,
    state => state.currentArticle,
);

export const getCurrentPage = createSelector(
    getArticlesState,
    state => state.currentPage,
);
