import { Component, Input } from '@angular/core';
import { Article } from '@base/core/models/article.model';

@Component({
    selector: 'app-feed-item',
    templateUrl: './feed-item.component.html',
    styleUrls: ['./feed-item.component.scss']
  })

export class FeedItemComponent {
  @Input() article: Article;

  constructor() {}
}
