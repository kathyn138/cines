// Routes for movies

const express = require("express");
const router = new express.Router();
const axios = require("axios");
const Movie = require("../models/movie");
const { API_KEY } = require("../config");

// Route for movie searching ?search=spiderman
// ?search=movie  =>  [{movie}]
// Returns array of search result movie objects

router.get("/", async function (req, res, next) {
  try {
    const movies = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${req.query.search}`);
    // sort movies with most recent release year first
    let sortedMovies = movies.data.Search.sort((a, b) => b.Year - a.Year);
    // convert keys into lowercase for consistency
    let movieData = sortedMovies.map(m => Object.keys(m).reduce((acc, key) => {
      acc[key.toLowerCase()] = m[key];
      return acc;
    }, {}));
    return res.json(movieData)
  } catch (err) {
    return next(err);
  }
});


// Route for getting movie details with valid imdb id 
// Returns object with data from API and database 

router.get("/:id", async function (req, res, next) {
  try {
    const movieFromApi = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${req.params.id}`);
    const movieFromDb = await Movie.findMovie(req.params.id);

    // convert keys into lowercase for consistency
    let movieData = Object.keys(movieFromApi.data).reduce((acc, key) => {
      acc[key.toLowerCase()] = movieFromApi.data[key];
      return acc;
    }, {});

    if (movieFromDb.length === 0) {
      movieData['thumbsUp'] = 0;
      movieData['thumbsDown'] = 0;
    } else {
      movieData['thumbsUp'] = movieFromDb[0]['thumbs_up'];
      movieData['thumbsDown'] = movieFromDb[0]['thumbs_down'];
    }

    return res.json(movieData);
  } catch (err) {
    return next(err);
  }
});

// Route for adding movie to database and initializing vote on a movie 

router.post("/:id/vote", async function (req, res, next) {
  try {
    let movie = await Movie.addMovie(req.body);
    let movieData = {};

    movieData['title'] = movie.movie_title;
    movieData['thumbsUp'] = movie.thumbs_up;
    movieData['thumbsDown'] = movie.thumbs_down;

    return res.json(movieData);
  } catch (err) {
    return next(err);
  }
});

// Route for updating votes on existing movie in database

router.patch("/:id/vote", async function (req, res, next) {
  try {
    let movie = await Movie.updateThumbs(req.body);
    let movieData = {};

    movieData['title'] = movie.movie_title;
    movieData['thumbsUp'] = movie.thumbs_up;
    movieData['thumbsDown'] = movie.thumbs_down;

    return res.json(movieData);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
