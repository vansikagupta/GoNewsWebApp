import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../_models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('article') article: Article;
  small_screen: boolean;
  outer_cols: number;
  outer_colspan: number;
  outer_rowspan: number;
  inner_rowheight: number;
  content_rowspan: number;

  constructor() { }

  ngOnInit() {
    this.small_screen = (window.innerWidth <= 400) ? true : false;
    this.resizelayout();
  }

  onResize(event) {
    this.small_screen = (window.innerWidth <= 400) ? true : false;
    this.resizelayout();
  }

  resizelayout(){
    if (this.small_screen === true){
      this.outer_cols = 1;
      this.outer_colspan = 1;
      this.outer_rowspan = 2;
      this.inner_rowheight = 3;
      this.content_rowspan = 2;
    }
    else{
      this.outer_cols = 3;
      this.outer_colspan = 2;
      this.outer_rowspan = 1;
      this.inner_rowheight = 1;
      this.content_rowspan = 1;
    }
  }

}
