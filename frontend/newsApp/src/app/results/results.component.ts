import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from '../_services/httpClient.service';
import { Article } from '../_models/article';
import { Subscription } from 'rxjs';
import { MessageService } from '../_services/message-pass.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  //@Input("searchKey") searchKey: string
  searchKey : string
  subscription: Subscription;
  articles: Article[]
  constructor(private http: HttpClientService, private messageService: MessageService) { 
    console.log("in results constructor 1st line",this.searchKey);
    this.subscription = this.messageService.getMessage()
    .subscribe(message => {
       this.searchKey = message.text; 
       console.log("in results constructor ",this.searchKey);
       this.getArticle();
       this.messageService.clearMessage();
      });
    
  }

  ngOnInit() {
    
  }

  getArticle(){
    this.http.getArticle(this.searchKey)
    .subscribe( data => {
      //console.log(data)
      this.articles = data;
      this.articles.forEach(element => {
        console.log(element.Title)
      });
      //console.log(this.articles)
    },
    error => {
      console.log(error.message)
    });
  }

}
