import { Time } from '@angular/common';

export class Article{
    constructor(
        public source: string,
        public author: string ,
        public Title: string,	
        public Description: string,
        public URL: string,
        public URLToImage: string,
        public PublishedAt: Time,
        public Content: string
    ){}
}

