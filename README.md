#General

Movie Search VueJS application using [Vite](https://vitejs.dev/) build tool. 

Routing organized is by [Vue Router](https://next.router.vuejs.org/).                
State management is organized by [Vuex](https://next.vuex.vuejs.org/).  
Http requests are done using [Axios](https://github.com/axios/axios).  
Mock server made using [Mock Service Worker](https://mswjs.io/). 
v14.16.0
7.6.3


## Dependencies
* Node.js (v14)
* Npm (v7.6)

  



#REQUIREMENTS

Frontend Technical Challenge
===============================

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


