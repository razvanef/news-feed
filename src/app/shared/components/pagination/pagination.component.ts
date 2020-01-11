import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() pageNumber: number;
  @Output() currentPage = new EventEmitter<number>();

  setPage(page: number) {
    this.currentPage.emit(page);
  }

}
