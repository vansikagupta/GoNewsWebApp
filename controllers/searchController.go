package controllers

import (
	"net/http"
	"fmt"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/vansikagupta/newsWebApp/models"
)

var apiKey = "7d3b57a788f043a6ad219ccf7ae2ac03"

func SearchHandler(w http.ResponseWriter, r *http.Request) {
	
	params := mux.Vars(r)
	searchKey := params["searchKey"]
	
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
	
	var result models.Result
	err = json.NewDecoder(res.Body).Decode(&result)
	if err != nil {
		w.Write([]byte("Internal Server Error"))
		return
	}
	//fmt.Println(result)
	//we can use this result in template
	
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}