let env = 'development';

if (window.location.hostname === 'vilina.github.io') {
  env = 'production';
}

let config = {
  baseUrl: env==='production'?'/movie-search':'',
  apiUrl: env==='production'?'/movie-search':'',
  moviesEndpoint: '/movies.json',
  actorsEndpoint: '/actors.json',
  genreEndpoint: '/genre.json'
};

export default config
