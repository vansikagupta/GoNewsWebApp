import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class MessageService{
    private subject = new BehaviorSubject<any>({text: "headlines"});

    receiveMessage(message: string) {
        console.log("message recieved: ",message)
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next(null);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}