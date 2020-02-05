import { Component } from '@angular/core';
import { HttpClientService } from './_services/httpClient.service';
import { Article } from './_models/article';
import { Router } from '@angular/router';
import { MessageService } from './_services/message-pass.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  searchKey: string;
  articles: Article[]

  constructor(private router: Router, private messageService: MessageService){ }

  sendMessage(searchKey: string): void {
    // send message to subscribers via observable subject
    this.messageService.receiveMessage(searchKey);
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  getArticle(){
    this.sendMessage(this.searchKey)
    this.router.navigate(['/results'])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  } 
}

