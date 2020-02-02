import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../_models/article';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
    result: Article[]
    constructor(private httpClient:HttpClient) {
    }

    getArticle(searchKey): Observable<Article[]>
    {
        console.log("in getArticle");
        return this.httpClient.get<any>('http://localhost:9000/search/'+searchKey)
        .pipe(map(response => {
            return response['articles'].map(item => {
                return new Article(
                    item.source.name,
                    item.author,
                    item.title,
                    item.description,
                    item.url,
                    item.urlToImage,
                    item.publishedAt,
                    item.content
                )
            })
        }
        ));
    }    
}
/*
response['articles'].forEach(element => {
    var obj = new Article(element[''],element['author'],element['title'],element['description'],element['url'],element['urlToImage'],element['publishedAt'],element['content']);
    this.result.push(obj);*/