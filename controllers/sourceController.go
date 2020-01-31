package controllers

import (
	"net/http"
	"fmt"
	"encoding/json"
	"github.com/vansikagupta/newsWebApp/models"
)

func GetAllSource (w http.ResponseWriter, r *http.Request) {

	endpoint := fmt.Sprintf("https://newsapi.org/v2/sources?language=en&country=in")
	
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
	
	var sources models.SourceResponse
	err = json.NewDecoder(res.Body).Decode(&sources)
	if err != nil {
		w.Write([]byte("Internal Server Error"))
		return
	}
	//fmt.Println(sources)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(sources)
}