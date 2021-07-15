import axios from 'axios'
import config from '../config'
import JSONbig from "json-bigint";
import moment from 'moment'


const jsonBig = JSONbig({
  useNativeBigInt: true
});

const apiUrl = config.apiUrl;

let axiosInstance = axios.create({
  baseURL: apiUrl,
});

function addFormattedDate(movies) {
  let temp = movies;
  if (Array.isArray(movies)) {
    temp = temp.map(function (movie) {
      movie.release_date_formatted = moment(movie.release_date).format('YYYY MMM DD');
      return movie;
    });
  } else if (temp && temp.release_date) {
    temp.release_date_formatted = moment(temp.release_date).format('YYYY MMM DD');
  }
  return temp
}

function getQueryParamsString(...args) {
  let queryParamsStr = '?';
  
  args.map((arg) => {
    if (arg[Object.keys(arg)[0]]) {
      queryParamsStr += Object.keys(arg)[0] + '=' + arg[Object.keys(arg)[0]] + '&';
    }
  });
  return queryParamsStr
}


export default {
  getMovies (genre) {
    let queryString = getQueryParamsString({'genreId': genre.id});
 
    return axiosInstance.get('/movies' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data)
      })
  },
  getSeries (genre) {
    let queryString = getQueryParamsString({'genreId': genre.id});
    
    return axiosInstance.get('/series' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getLatest (genre) {
    let queryString = getQueryParamsString({'genreId': genre.id});

    return axiosInstance.get('/latest' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getPopular (genre) {
    let queryString = getQueryParamsString({'genreId': genre.id});
    
    return axiosInstance.get('/popular' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getFeatured (genre) {
    let queryString = getQueryParamsString({'genreId': genre.id});
    
    return axiosInstance.get('/featured' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getLatestFiltered (isMovies, genre) {
    let queryString = getQueryParamsString({ 'isMovies': isMovies}, {'genreId': genre.id});
    
    return axiosInstance.get('/latest' + queryString , {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getPopularFiltered (isMovies, genre) {
    let queryString = getQueryParamsString({ 'isMovies': isMovies}, {'genreId': genre.id});
    
    return axiosInstance.get('/popular' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
  getFeaturedFiltered (isMovies, genre) {
    let queryString = getQueryParamsString({ 'isMovies': isMovies}, {'genreId': genre.id});
    
    return axiosInstance.get('/featured' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return res.data;
      })
  },
  getGenres () {
    return axiosInstance.get('/genres', {
      transformResponse: [(data) => jsonBig.parse(data)]})
      .then((res) => {
        return res.data;
      })
  },
  getGenresFiltered (searchValue) {
    let queryString = getQueryParamsString({ 'key': searchValue});
    return axiosInstance.get('/genres/all' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return res.data
      })
  },
  getAllMoviesFiltered (searchValue, genre, limit, offset) {
    let queryString = getQueryParamsString(
      { 'key': searchValue},
      {'genreId': genre.id},
      {'limit': limit},
      {'offset': offset});
    return axiosInstance.get('/movies/all' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        addFormattedDate(res.data.movies);
        return res.data;
      })
  },
  getActorsFiltered (searchValue) {
    let queryString = getQueryParamsString({ 'key': searchValue});
    return axiosInstance.get('/actors/all' + queryString, {
    transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return res.data
      })
  },
  getMovie (id) {
    let queryString = getQueryParamsString({ 'id': id});
    return axiosInstance.get('/movie' + queryString, {
      transformResponse: [(data) => jsonBig.parse(data)]
    })
      .then((res) => {
        return addFormattedDate(res.data);
      })
  },
}