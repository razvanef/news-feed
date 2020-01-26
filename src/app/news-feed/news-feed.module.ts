import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@base/material.module';
import { SharedModule } from '@base/shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedComponent } from './components/feed/feed.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        SharedModule,
    ],
    declarations: [
        FeedComponent,
        FeedItemComponent,
        ArticleComponent,
    ],
    exports: [
        FeedComponent,
        FeedItemComponent,
    ]
})

export class NewsFeedModule {}
