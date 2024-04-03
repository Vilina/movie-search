## PEXFLIX

## Description

Simple Movie Search app with VueJS using [Vite](https://vitejs.dev/) build tool. Ui is inspired by current trends. 
###### Disclaimer  
Any similarity to actual website is purely coincidental.


## Tools

Routing organized is by [Vue Router](https://next.router.vuejs.org/).                
State management is organized by [Vuex](https://next.vuex.vuejs.org/).  
Http requests are done using [Axios](https://github.com/axios/axios).  
Mock server made using [Mock Service Worker](https://mswjs.io/).   
Linter: [ESLint](https://eslint.org/)

## [Demo](https://vilina.github.io/movie-search/)
### [API contract](https://github.com/Vilina/movie-search/blob/main/docs/api.md) 
### [General product logic info](https://github.com/Vilina/movie-search/blob/main/docs/general.md)


## Dependencies

* Node.js (v14)
* Npm (v7.6)

## Structure
```
├── dist &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Build   
├── docs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Documentation files   
├── public &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Public assets + mswjs + json data files   
├── src &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Source files  
│   ├── _api  
│   │   ├── mock  
│   │   │    ├── browser.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# mswjs worker setum  
│   │   │    └── handlers.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # mswjs http requests' handlers  
│   │   └──────  mockServerFilters.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Mock Api logic  
│   └────── index.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Api methods  
│   ├── _services &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Helper Service  
│   ├── _store &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Vuex store, actions, getters, mutations  
│   ├── components  
│   │   ├──Common &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Reusable components  
│   │   └── Main &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Route components  
│   ├── App.vue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Entry component  
│   ├── config.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Config   
│   ├── main.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# App creation  
│   └── router.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Router  
└── README.md
├── dist                          # Build
├── docs                          # Documentation files
├── public                        # Public assets + mswjs + json data files
└── src                           # Source files
    ├── _api
    │   ├── mock
    │   │   ├── browser.js         # mswjs worker setum
    │   │   └── handlers.js        # mswjs http requests' handlers
    │   └── mockServerFilters.js  # Mock Api logic
    └── index.js                  # Api methods
    ├── _services                 # Helper Service
    ├── _store                    # Vuex store, actions, getters, mutations
    ├── components
    │   ├── Common                # Reusable components
    │   └── Main                  # Route components
    ├── App.vue                   # Entry component
    ├── config.js                 # Config
    ├── main.js                   # App creation
    └── router.js                 # Router
└── README.md
```

## Installation

1. Clone the repo `git clone https://github.com/Vilina/movie-search.git movie-search && cd movie-search`.
1. Install the dependencies in the root directory `npm install`

## Running locally

`npm run dev`     for development  
`npm run build`   for building  
`npm run serve`   for serving built version  
`npm run lint`    for running ESlint  


## Requirements

## Frontend Technical Challenge

Please build a page that allows for searching and filtering of movies via an API. Below is an example response from the API, but the request format is up to you. Our goal is to understand how you would design the API contract so please explain your decisions thoroughly. You do not need to build a functioning API. Mocked or hardcoded responses are perfectly fine.

For the page's overall look & feel, you can use anything you'd like as a reference. Feel free to be inspired by Netflix, IMDB, or other similar websites.

Requirements:
 * Use Vue.js, HTML, and any CSS preprocessor of your choice
 * The constructed payload must  be visible either through the console or some other explicit rendering

The submission should be sent in a GitHub repo.

We expect this to be a well thought out project, but we also understand you may have other job processes or current work/life responsibilities taking up your time. All we ask is that you deliver something that you’re proud of.

Please do not hesitate to reach out and ask for clarification. 

Example Response:
```json
[
  {
    "id": 163979287265942016,
    "title": "An American Tail: Fievel Goes West",
    "genre": [
      {
        "id": 3,
        "title": "Comedy"
      },
      {
        "id": 8,
        "title": "Western"
      }
    ],
    "actors": [
      {
        "id": 163978496991957504,
        "name": "Fievel Mousekewitz"
      },
      {
        "id": 163978647315813376,
        "name": "Tanya MouseKewitz"
      }
    ],
    "is_series": true,
    "release_date": "1991-11-17T00:00:00.000000Z"
  },
  {
    "id": 163982121944357888,
    "title": "The Notebook",
    "genre": [
      {
        "id": 2,
        "title": "Drama"
      },
      {
        "id": 6,
        "title": "Romance"
      }
    ],
    "actors": [
      {
        "id": 163982182073900544,
        "name": "Ryan Gosling"
      },
      {
        "id": 163982199253770240,
        "name": "Rachel McAdams"
      }
    ],
    "is_series": false,
    "release_date": "2004-06-25T00:00:00.000000Z"
  }
]
```


