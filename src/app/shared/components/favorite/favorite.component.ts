import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticlesFacade } from '@store/articles/articles.facade';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  @Input() articleId: string;
  favoritesNo: number;
  isFavorite: boolean;
  favorites$ = this.articlesFacade.favorites$;

  constructor(
    private articlesFacade: ArticlesFacade,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.favorites$.subscribe(favoritesList => {
      this.favoritesNo = favoritesList.length;
      console.log(this.articleId, favoritesList.indexOf(this.articleId) > -1)
      this.isFavorite = favoritesList.indexOf(this.articleId) > -1;
    });
  }

  toggleSelected(): void {
    if (!this.isFavorite) {
      if (this.favoritesNo === 9) {
        this.snackBar.open('You can add to favorite only 10 articles!', 'OK', {
          duration: 2000,
        });
        return;
      }

      this.articlesFacade.addToFavorites(this.articleId);
      return;
    }

    this.articlesFacade.removeFromFavorites(this.articleId);
  }
}
