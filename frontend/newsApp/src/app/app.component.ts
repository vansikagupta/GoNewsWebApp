import { Component } from '@angular/core';
import { HttpClientService } from './_services/httpClient.service';
import { Article } from './_models/article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  searchKey: string;
  articles: Article[]

  constructor(private http: HttpClientService){ }

  getArticle(){
    this.http.getArticle(this.searchKey)
    .subscribe( data => {
      //console.log(data)
      this.articles = data;
      this.articles.forEach(element => {
        console.log(element.Title)
      });
      //console.log(this.articles)
    });
  }
}
