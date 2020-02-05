import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../_services/message-pass.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  breakpoint: number;
  topics: string[] = ['Bitcoin', 'ArtificialIntelligence', 'Cryptocurrency',
                      'Startups', 'DataScience', 'Cloud', 'Programming', 'CodingPractices',
                      'Golang','Microservices', 'BigData', 'Science']
  searchKey: string;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  sendMessage(searchKey: string): void {
    // send message to subscribers via observable subject
    this.messageService.receiveMessage(searchKey);
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  setSearchKey(topic: string){
    this.searchKey = topic;
    this.getArticle();
  }

  getArticle(){
    this.sendMessage(this.searchKey)
    this.router.navigate(['/results'])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
  } 

}
