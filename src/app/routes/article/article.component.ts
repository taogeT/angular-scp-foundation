import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  loading = true;
  article: Article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { article: Article }) => {
      this.article = data.article;
      this.loading = false;
    });
  }

  get seriesId(): number {
    return Math.ceil(this.article.serialNumber / 1000);
  }

  get fullTitle(): string {
    return `${this.article.name} - ${this.article.title}`;
  }
}
