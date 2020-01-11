import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from '@news/components/feed/feed.component';
import { ArticleComponent } from '@news/components/article/article.component';

const routes: Routes = [
  { path: '', component: FeedComponent},
  { path: 'article/:id', component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
