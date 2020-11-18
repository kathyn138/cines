const db = require("../db");

/** Related functions for movies. */

class Movie {
  /** Given a movie name, check if it already exists in the database. */

  static async findMovie(movieid) {
    const movieRes = await db.query(
      `SELECT imdbid, movie_title, thumbs_up, thumbs_down
            FROM movies
            WHERE imdbid = $1`,
      [movieid]);

    const movie = movieRes.rows;

    if (!movie) {
      const error = new Error(`There exists no movie '${name}'`);
      error.status = 404;
      throw error;
    }

    return movie;
  }

  static async addMovie(movieid, movieTitle, thumb) {
    let thumbsUp = 0;
    let thumbsDown = 0;

    if (thumb === 'up') {
      thumbsUp = 1;
    } else {
      thumbsDown = 1;
    }

    const movieRes = await db.query(
      `INSERT INTO movies 
            (imdbid, movie_title, thumbs_up, thumbs_down)
            VALUES ($1, $2, $3, $4)
            RETURNING imdbid, movie_title, thumbs_up, thumbs_down`,
      [
        movieid,
        movieTitle,
        thumbsUp,
        thumbsDown
      ]);

    return movieRes.rows[0];
  }

  static async updateThumbs(movieid, thumb) {
    let movieRes;

    if (thumb === 'up') {
      movieRes = await db.query(
        `UPDATE movies
        SET thumbs_up = thumbs_up + 1
        WHERE imdbid = ${movieid}`
      );
    } else {
      movieRes = await db.query(
        `UPDATE movies
        SET thumbs_down = thumbs_down + 1
        WHERE imdbid = ${movieid}`
      );
    }

    if (!movieRes.rows) {
      const error = new Error(`Can't update thumbs. 
      There exists no movie '${name}'`);
      error.status = 404;
      throw error;
    }

    return movieRes.rows[0];
  }

}


module.exports = Movie;
