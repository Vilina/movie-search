#Movies / Series
* Movie object
```
{
    "id": Bigint,
    "title": String,
    "genre": [
        {
            "id": Int,
            "title": String
        }
    ],
    "actors": [
        {
            "id": BigInt,
            "name": String
        }
    ],
    "is_series": Boolean,
    "release_date": Date ISO 1860
},
```
**GET /movie**  ``_api/index.js -> getMovie``
----
  Returns movie by id.  
* **URL Params**  
  Required: id: number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    <movie_object>
},
```


**GET /movies**  ``_api/index.js -> getMovies``
----
  Returns movies (is_series: false) filtered by Genre if genreId is passed.  
* **URL Params**  
  Optional: genreId: number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<movie_object>},
   {<movie_object>},
   {<movie_object>}
]
```

**GET /series**  ``_api/index.js -> getSeries``
----
  Returns series (is_series: true) filtered by Genre if genreId is passed.  
* **URL Params**  
  Optional: genreId: number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<movie_object>},
   {<movie_object>},
   {<movie_object>}
]
```

**GET /latest**  ``_api/index.js -> getLatest & getLatestFiltered``
----
  Returns movies/series (is_series: false/true) ordered by release_date(desc) if isMovies param is passed and both types otherwise.  
  Is filtered by Genre if genreId is passed.
* **URL Params**  
  Optional: isMovies :boolean  
  Optional: genreId :number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<movie_object>},
   {<movie_object>},
   {<movie_object>}
]
```

**GET /popular**  ``_api/index.js -> getPopular & getPopularFiltered``
----
  Returns movies/series (is_series: false/true) by popularity (since mock server is working it just returns shuffled array) if isMovies param is passed and both types otherwise.  
  Is filtered by Genre if genreId is passed.
* **URL Params**  
  Optional: isMovies :boolean  
  Optional: genreId :number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
   {<movie_object>},
   {<movie_object>},
   {<movie_object>}
]
```

**GET /featured**  ``_api/index.js -> getFeatured & getFeaturedFiltered``
----
  Returns a featured movie/series (is_series: false/true) if isMovies param is passed and from both types otherwise (since mock server is working it just returns sample from array).  
  Is filtered by Genre if genreId is passed.
* **URL Params**  
  Optional: isMovies :boolean  
  Optional: genreId :number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    <movie_object>
},
```

**GET /movies/all**  ``_api/index.js -> getAllMoviesFiltered``
----
  Returns paginated movies + series array filtered by genreId + search key (if they are present) and filter result count for pagination calculations. Returns first 10 elements id offset is not present, and offset+10 if present.
* **URL Params**  
  Optional: key :string  
  Optional: genreId :number
  Required: limit :number
  Optional: offset :number
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    count,
    [
       {<movie_object>},
       {<movie_object>},
       {<movie_object>}
    ]
},
```


#Genre
* Genre object
```
{
    "id": Int,
    "title": String
},
```

**GET /genres**  ``_api/index.js -> getGenres``
----
Returns all available genres
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {<genre_object>},
    {<genre_object>},
    {<genre_object>}    
]
```

**GET /genres/all**  ``_api/index.js -> getGenresFiltered``
----
Returns all available genres filtered by search key (searching substring key in genre title)
* **URL Params**  
  key: string
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {<genre_object>},
    {<genre_object>},
    {<genre_object>}    
]
```

#Actor
* Actor object
```
{
    "id": Int,
    "name": String
},
```

**GET /actors/all**  ``_api/index.js -> getActorsFiltered``
----
Returns actors filtered by search key (searching substring key in actor name)
* **URL Params**  
  key: string
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    {<actor_object>}
    {<actor_object>}
    {<actor_object>}
},
```