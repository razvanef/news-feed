import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesFacade } from './articles.facade';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ArticlesFacade]
})
export class ArticlesStoreModule {}
