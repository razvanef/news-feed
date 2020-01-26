import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from, forkJoin } from 'rxjs';

import { NewsFeedService } from './articles.service';
import * as ArticleActions from './articles.actions';
import { map, mergeMap, catchError, concatMap, switchMap, toArray } from 'rxjs/operators';

@Injectable()
export class ArticlesEffects {

    constructor(
        private actions$: Actions,
        private newsFeedService: NewsFeedService,
      ) {}

    loadNewsFeed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ArticleActions.getNewsFeed),
            mergeMap(action =>
                this.newsFeedService.getNewsFeed(action.page, action.key).pipe(
                    map(newsFeed => ArticleActions.getNewsFeedSuccess({ newsFeed })),
                    catchError(error =>
                        of(ArticleActions.getNewsFeedFail({ error }))
                    ),
                )
            )
        ));

    getArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ArticleActions.getArticle),
            mergeMap(action =>
                this.newsFeedService.getArticle(action.articleId).pipe(
                    map(article => ArticleActions.getArticleSuccess({ article })),
                    catchError(error =>
                        of(ArticleActions.getArticleFail({ error }))
                    ),
                )
            )
    ));

    getFavoriteList = createEffect(() =>
        this.actions$.pipe(
            ofType(ArticleActions.getFavoriteArticle),
            mergeMap(action =>
                of(action.favoritesList).pipe(
                    switchMap(ids => from(ids).pipe(
                        concatMap(id =>
                            this.newsFeedService.getArticle(id)
                        ),
                    )),
                    map(item => item.response.content),
                    toArray(),
                    map(newsFeed => ArticleActions.getFavoriteArticleSuccess({ newsFeed })),
                    catchError(error =>
                        of(ArticleActions.getFavoriteArticleFail({ error }))
                    ),
                )
            )

        ))

}
