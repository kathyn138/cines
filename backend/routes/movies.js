/** Routes for movies. */

const express = require("express");
const router = new express.Router();
const Movie = require("../models/movie");

/** 
 * route for getting details on a specific movie */

router.get("/:id", async function (req, res, next) {
  try {
    const movie = await Movie.findMovie(req.query.id);
    return res.json({ movie });
  } catch (err) {
    return next(err);
  }
});

// route for voting on a movie 
router.post("/:id", async function (req, res, next) {
  try {
    let movie;
    const movieReq = await Movie.findMovie(req.query.id);

    if (movieReq.movie.length === 0) {
      movie = await Movie.addMovie(req.body);
    } else {
      movie = await Movie.updateThumbs(req.body);
    }

    return res.json({ movie });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
