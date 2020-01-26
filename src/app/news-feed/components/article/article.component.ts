import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ArticlesFacade } from '@store/articles/articles.facade';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: any;
  article$ = this.articlesFacade.currentArticle$;

  constructor(
    private articlesFacade: ArticlesFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.articlesFacade.getArticle(id);
    });

    // this.articlesFacade.currentArticle$.subscribe(res => console.log(res));
  }

}
