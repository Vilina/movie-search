import { rest } from 'msw'
import JSONbig from "json-bigint";
import mock from "./mockServerFilters";
import config from '../../config'
import _ from 'lodash';

const jsonBig = JSONbig({
  useNativeBigInt: true,
  storeAsString: true
});
let genresArray = [];
let moviesArray = [];
let actorsArray = [];

async function getGenres() {
  if (!genresArray.length) {
    let response = await fetch(config.genreEndpoint);
    genresArray = jsonBig.parse(await response.text());
  }
  
  return genresArray;
}

async function getMovies() {
  if (!moviesArray.length) {
    let response = await fetch(config.moviesEndpoint);
    moviesArray = jsonBig.parse(await response.text());
  }
  return moviesArray;
}

async function getActors() {
  if (!actorsArray.length) {
    let response = await fetch(config.actorsEndpoint);
    actorsArray = jsonBig.parse(await response.text());
  }
  
  return actorsArray;
}

export const handlers = [
  rest.get(config.apiUrl + '/genres', async (req, res, ctx) => {
    let result = await getGenres();
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/movie', async (req, res, ctx) => {
    const id = req.url.searchParams.get('id');
    let result = await getMovies();
    result = mock.getMovie(result, id);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/movies', async (req, res, ctx) => {
    const genreId = req.url.searchParams.get('genreId');
    let result = await getMovies();
    result = mock.getMovies(result, genreId);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/series', async (req, res, ctx) => {
    const genreId = req.url.searchParams.get('genreId');
    let result = await getMovies();
    result = mock.getSeries(result, genreId);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/latest', async (req, res, ctx) => {
    const genreId = req.url.searchParams.get('genreId');
    const isMovies = JSON.parse(req.url.searchParams.get('isMovies'));
    let result = await getMovies();
    if (!_.isNil(isMovies)) {
      result = mock.getLatestFiltered(result, isMovies, genreId);
    } else {
      result = mock.getLatest(result, genreId);
    }
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/popular', async (req, res, ctx) => {
    const genreId = req.url.searchParams.get('genreId');
    const isMovies = JSON.parse(req.url.searchParams.get('isMovies'));
    let result = await getMovies();
    if (!_.isNil(isMovies)) {
      result = mock.getPopularFiltered(result, isMovies, genreId);
    } else {
      result = mock.getPopular(result, genreId);
    }
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/featured', async (req, res, ctx) => {
    const genreId = req.url.searchParams.get('genreId');
    const isMovies = JSON.parse(req.url.searchParams.get('isMovies'));
    let result = await getMovies();
    if (!_.isNil(isMovies)) {
      result = mock.getFeaturedFiltered(result, isMovies, genreId);
    } else {
      result = mock.getFeatured(result, genreId);
    }
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/movies/all', async (req, res, ctx) => {
    const searchValue = req.url.searchParams.get('key');
    const genreId = req.url.searchParams.get('genreId');
    const limit = req.url.searchParams.get('limit');
    const offset = req.url.searchParams.get('offset');
    let result = await getMovies();
    result = mock.getAllMoviesFiltered(result, searchValue, genreId, limit, offset);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/genres/all', async (req, res, ctx) => {
    const searchValue = req.url.searchParams.get('key');
    let result = await getGenres();
    result = mock.getAllGenresFiltered(result, searchValue);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
  rest.get(config.apiUrl + '/actors/all', async (req, res, ctx) => {
    const searchValue = req.url.searchParams.get('key');
    let result = await getActors();
    result = mock.getAllActorsFiltered(result, searchValue);
    return res(
      ctx.status(200),
      ctx.json(result),
    )
  }),
];