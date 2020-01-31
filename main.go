package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"github.com/vansikagupta/newsWebApp/controllers"
) 

var apiKey = "7d3b57a788f043a6ad219ccf7ae2ac03"

func indexHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Welcome</h1>"))
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	
	myRouter.HandleFunc("/", indexHandler)
	myRouter.HandleFunc("/search/{searchKey}", controllers.SearchHandler)
	myRouter.HandleFunc("/sources", controllers.GetAllSource)
	http.ListenAndServe(":9000",myRouter)
}

func main() {
	handleRequests()
}