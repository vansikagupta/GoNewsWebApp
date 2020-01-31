package main

import (
	"net/http"
	"fmt"
	"net/url"
	"time"
	"encoding/json"
) 

var apiKey = "7d3b57a788f043a6ad219ccf7ae2ac03"

type Source struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Article struct {
	Source 		Source 	  `json:"source"`
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

func indexHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Welcome</h1>"))
}

func searchHandler(w http.ResponseWriter, r *http.Request) {
	u, err := url.Parse(r.URL.String())
	if err != nil {
		w.Write([]byte("Internal Server Error"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	
	params := u.Query()
	searchKey := params.Get("q")
	
	fmt.Println("Search Query is: ", searchKey)
	endpoint := fmt.Sprintf("https://newsapi.org/v2/everything?q=%s",searchKey)
	
	client := &http.Client{}
	req, err := http.NewRequest("GET", endpoint, nil)
	req.Header.Add("X-Api-Key", apiKey)
	
	res, err := client.Do(req)
	if err != nil {
		w.Write([]byte("Internal Server Error"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	defer res.Body.Close()
	
	var result Result
	err = json.NewDecoder(res.Body).Decode(&result)
	if err != nil {
		w.Write([]byte("Internal Server Error"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	//fmt.Println(result)
	//we can use this result in template
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}

func main() {
	mux := http.NewServeMux()
	
	mux.HandleFunc("/", indexHandler)
	mux.HandleFunc("/search", searchHandler)
	http.ListenAndServe(":9000",mux)
}