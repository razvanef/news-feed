import { Component, Output, EventEmitter } from '@angular/core';
import { ArticlesFacade } from '@store/articles/articles.facade';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  pageNumber$ = this.articlesFacade.currentPage$;

  constructor(private articlesFacade: ArticlesFacade) {}

  setPage(page: number) {
    this.articlesFacade.setCurrentPage(page);
  }

}
