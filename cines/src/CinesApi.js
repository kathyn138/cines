import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class CinesApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getMovie(title) {
    let res = await this.request(`movies/${title}`);
    return res;
  }

  static async searchMovies(query) {
    let res = await this.request(`movies/search`, { search: query });
    return res;
  }

  static async initialVote(movie, vote) {
    let res = await this.request(`movies/${movie}/vote`, { thumb: vote }, 'post');
    return res;
  }

  static async vote(movie, vote) {
    let res = await this.request(`movies/${movie}/vote`, { thumb: vote }, 'patch');
    return res;
  }
}

export default CinesApi;