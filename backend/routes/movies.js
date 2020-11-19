// Routes for movies

const express = require("express");
const router = new express.Router();
const axios = require('axios');
const Movie = require("../models/movie");

// Replace apiKey with environment variable
const apiKey = 'd2cab6'

// Route for movie searching
// Returns array of movie objects

router.get("/search/:search", async function (req, res, next) {
  try {
    const movies = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${req.params.search}`);
    return res.json(movies.data.Search)
  } catch (err) {
    return next(err);
  }
});


// Route for getting movie details with valid imdb id 
// Returns object with data from API and database 

router.get("/:id", async function (req, res, next) {
  try {
    const movieFromApi = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${req.params.id}`);
    const movieFromDb = await Movie.findMovie(req.params.id);

    let movieData = movieFromApi.data;

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

    return res.json({ movie });
  } catch (err) {
    return next(err);
  }
});

// Route for updating votes on existing movie in database

router.patch("/:id/vote", async function (req, res, next) {
  try {
    let movie = await Movie.updateThumbs(req.body);

    return res.json(movie);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
