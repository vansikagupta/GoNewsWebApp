package models

type Source struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Description string `json:"description"`
		URL         string `json:"url"`
		Category    string `json:"category"`
		Language    string `json:"language"`
		Country     string `json:"country"`
} 

type SourceResponse struct {
	Status  string   `json:"status"`
	Sources []Source `json:"sources"`
}