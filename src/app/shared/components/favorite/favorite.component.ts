import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsFeedService } from '@news/services/news-feed.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  @Input() articleId: string;

  constructor(
    private newsFeedService: NewsFeedService,
    private snackBar: MatSnackBar,
  ) {}

  toggleSelected(): void {
    if (!this.isFavorited()) {
      if (this.newsFeedService.favorites.length === 9) {
        this.snackBar.open('You can add to favorite only 10 articles!', 'OK', {
          duration: 2000,
        });
        return;
      }

      this.newsFeedService.addToFavorites(this.articleId);
      return;
    }

    this.newsFeedService.removeFromFavorites(this.articleId);
  }

  isFavorited(): boolean {
    return this.newsFeedService.favorites.indexOf(this.articleId) > -1;
  }

}
