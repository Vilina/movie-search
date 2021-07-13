import _ from "lodash";

function filterMoviesByType(moviesArray, isMovie) {
  if(Boolean(isMovie)) {
    return moviesArray.filter((movie)=>{
      return !movie.is_series;
    })
  } else {
    return moviesArray.filter((movie)=>{
      return movie.is_series;
    })
  }
}

function filterMoviesByGenre(moviesArray, genreId) {
  if (genreId) {
    return moviesArray.filter((movie) => {
      return _.some(movie.genre, (genre) => {
        return genre.id == genreId;
      });
    })
  }
  return moviesArray;
}

function filterAllMovies(moviesArray, searchValue, genreId, limit, offset) {
  let search = _.toLower(searchValue);
  let filteredMovies = moviesArray;
  if (searchValue && !genreId) {
    filteredMovies = moviesArray.filter((movie) => {
      let byTitle = movie.title.indexOf(search) >= 0;
      let byActor = movie.actors.filter((actor) => {
        return _.toLower(actor.name).indexOf(search) >= 0;
      });
      let byGenre = movie.genre.filter((genre) => {
        return _.toLower(genre.title).indexOf(search) >= 0;
        // return _.toLower(genre.title) === search;
      });
      return byTitle || byActor.length || byGenre.length;
    })
  } else if (searchValue && genreId) {
    filteredMovies = moviesArray.filter((movie) => {
      let byTitle = movie.title.indexOf(search) >= 0;
      let byGenre = movie.genre.filter((genre) => {
        return  genre.id == genreId;
      });
      return byTitle && byGenre.length;
    })
  } else if (!searchValue && genreId) {
    filteredMovies = moviesArray.filter((movie) => {
      let byGenre = movie.genre.filter((genre) => {
        return  genre.id == genreId;
      });
      return byGenre.length;
    })
  }
  return { movies: filteredMovies.slice(parseInt(offset || 0), parseInt(offset || 0) + parseInt(limit || 0)), count: filteredMovies.length};
}

function filterActors(actors, searchValue) {
  return actors.filter((actor) => {
    return _.toLower(actor.name).indexOf(_.toLower(searchValue)) >= 0;
  });
}

function filterGenres(genres, searchValue) {
  return genres.filter((genres) => {
    return _.toLower(genres.title).indexOf(_.toLower(searchValue)) >= 0;
  });
}

export default {
  getFeatured: (moviesArray, genreId) => {
    let filteredByGenre = filterMoviesByGenre(moviesArray, genreId);
    return filteredByGenre.length ? _.sample(filterMoviesByGenre(filteredByGenre, genreId)) : null;
  },
  getMovies: (moviesArray, genreId) => {
    let filteredMovies = filterMoviesByType(moviesArray, true);
    return filterMoviesByGenre(filteredMovies, genreId);
  },
  getSeries: (moviesArray, genreId) => {
    let filteredMovies = filterMoviesByType(moviesArray, false);
    return filterMoviesByGenre(filteredMovies, genreId);
  },
  getLatest: (moviesArray, genreId) => {
    return _.orderBy(filterMoviesByGenre(moviesArray, genreId), ['release_date'],['desc']);
  },
  getPopular: (moviesArray, genreId) => {
    return _.shuffle(filterMoviesByGenre(moviesArray, genreId));
  },
  getLatestFiltered: (moviesArray, isMovies, genreId) => {
    let filteredMovies = filterMoviesByType(moviesArray, isMovies);
    return _.orderBy(filterMoviesByGenre(filteredMovies, genreId), ['release_date'],['desc']);
  },
  getPopularFiltered: (moviesArray, isMovies, genreId) => {
    let filteredMovies = filterMoviesByType(moviesArray, isMovies);
    return _.shuffle(filterMoviesByGenre(filteredMovies, genreId));
  },
  getFeaturedFiltered: (moviesArray, isMovies, genreId) => {
    let filteredMovies = filterMoviesByType(moviesArray, isMovies);
    let filteredByGenre = filterMoviesByGenre(filteredMovies, genreId);
    return filteredByGenre.length ? _.sample(filteredByGenre) : null;
  },
  getAllMoviesFiltered: (moviesArray, searchValue, genreId, limit, offset) => {
    let filteredMovies = filterAllMovies(moviesArray, searchValue, genreId, limit, offset);
    return {movies: filteredMovies.movies, count: filteredMovies.count};
  },
  getAllGenresFiltered: (genresArray, searchValue) => {
    return filterGenres(genresArray, searchValue);
  },
  getAllActorsFiltered: (actorsArray, searchValue) => {
    return filterActors(actorsArray, searchValue);
  },
  getMovie: (moviesArray, id) => {
    return moviesArray.find((movie) => {
      return movie.id == id
    })
  }
}