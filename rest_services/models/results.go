package models

import "time"

type Origin struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Article struct {
	Source 		Origin 	  `json:"source"`
	Author      string    `json:"author"`
	Title       string    `json:"title"`		
	Description string    `json:"description"`
	URL         string    `json:"url"`
	URLToImage  string    `json:"urlToImage"`
	PublishedAt time.Time `json:"publishedAt"`
	Content     string    `json:"content"`
} 

type Result struct {
	Status       string `json:"status"`
	TotalResults int    `json:"totalResults"`
	Articles []Article	`json:"articles"`
}