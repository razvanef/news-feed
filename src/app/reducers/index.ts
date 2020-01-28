import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromArticle from '@store/articles/actices.interface';
import * as articleReducer from '@store/articles/articles.reducer';

export interface State {
  newsFeed: fromArticle.ArticlesState;
}

export const reducers: ActionReducerMap<State> = {
  newsFeed: articleReducer.articleReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{newsFeed: ['favorites']}],
    rehydrate: true
  })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

