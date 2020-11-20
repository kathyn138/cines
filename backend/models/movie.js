const db = require("../db");

// Related functions for movies.

class Movie {
  // Given a movie id, check if it already exists in the database.

  static async findMovie(movieId) {
    const movieRes = await db.query(
      `SELECT imdbid, movie_title, thumbs_up, thumbs_down
            FROM movies
            WHERE imdbid = $1`,
      [movieId]);

    const movie = movieRes.rows;

    if (!movie) {
      const error = new Error(`There exists no movie '${name}'`);
      error.status = 404;
      throw error;
    }

    return movie;
  }

  // Add a movie to database and initialize votes

  static async addMovie(data) {
    let duplicateCheck = await db.query(
      `SELECT imdbid, movie_title, thumbs_up, thumbs_down
            FROM movies
            WHERE imdbid = $1`,
      [data.movieId]);

    if (duplicateCheck.rows[0]) {
      const err = new Error(
        `There already exists a movie with ID ${data.movieId}`);
      err.status = 409;
      throw err;
    }

    let thumbsUp = 0;
    let thumbsDown = 0;

    if (data.thumb === 'up') {
      thumbsUp = 1;
    } else if (data.thumb === 'down') {
      thumbsDown = 1;
    }

    const movieRes = await db.query(
      `INSERT INTO movies 
            (imdbid, movie_title, thumbs_up, thumbs_down)
            VALUES ($1, $2, $3, $4)
            RETURNING imdbid, movie_title, thumbs_up, thumbs_down`,
      [
        data.movieId,
        data.movieTitle,
        thumbsUp,
        thumbsDown
      ]);

    return movieRes.rows[0];
  }

  // Update votes for an existing movie in database

  static async updateThumbs(data) {
    let movieRes;

    if (data.thumb === 'up') {
      movieRes = await db.query(
        `UPDATE movies
        SET thumbs_up = thumbs_up + 1
        WHERE imdbid = $1
        RETURNING imdbid, movie_title, thumbs_up, thumbs_down`,
        [data.movieId]);
    } else if (data.thumb === 'down') {
      movieRes = await db.query(
        `UPDATE movies
        SET thumbs_down = thumbs_down + 1
        WHERE imdbid = $1
        RETURNING imdbid, movie_title, thumbs_up, thumbs_down`,
        [data.movieId]);
    }

    if (!movieRes.rows) {
      const error = new Error(`Can't update thumbs. 
      There exists no movie '${data.movieTitle}'`);
      error.status = 404;
      throw error;
    }

    return movieRes.rows[0];
  }
}


module.exports = Movie;
