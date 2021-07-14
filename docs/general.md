## General workflow

Application uses vuex for state management. 

Routing 

/ &nbsp;&nbsp;&nbsp;&nbsp; :main view   
/movies &nbsp;&nbsp;&nbsp;&nbsp; :only movies view   
/series &nbsp;&nbsp;&nbsp;&nbsp; :only series view   
/search/:search? &nbsp;&nbsp;&nbsp;&nbsp; :search results view   
/movie/:id? &nbsp;&nbsp;&nbsp;&nbsp; :individual movie view   

[Routes](https://github.com/Vilina/movie-search/blob/main/src/router.js) have beforeEnter guards which using [helperService.js](https://github.com/Vilina/movie-search/tree/main/src/_services) dispatches actions needed for specific route to the store.     
Those actions are making API calls using [_api/index.js](https://github.com/Vilina/movie-search/blob/main/src/_api/index.js) service via axios.   
Api calls are caught by [handlers of mock service worker](https://github.com/Vilina/movie-search/blob/main/src/_api/mock/handlers.js).  
MSWjs gets data from json asset files and filters them to get request appropriate data in [mockServiceFilters.js](https://github.com/Vilina/movie-search/blob/main/src/_api/mock/mockServerFilters.js) mimicking backend work.  

 