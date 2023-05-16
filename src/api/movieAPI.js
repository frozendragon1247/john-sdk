import axios from "axios";
import { makeFilter } from "../util";
import {
  BASE_URL,
  MOVIE_BASE_ENDPOINT,
  QUOTE_BASE_ENDPOINT,
} from "../constants";

const MOVIE_BASE_URL = `${BASE_URL}${MOVIE_BASE_ENDPOINT}`;

export default class MovieApi {
  constructor(token) {
    this.token = token;
    this.defaultOption = {
      limit: 100,
      page: 1,
      offset: 0,
      sort: "",
      match: "",
      include: "",
      exists: "",
      regex: "",
      symbol: "",
    };
  }

  async getAllMovies(option) {
    const filter = makeFilter(Object.assign(this.defaultOption, option));

    const result = await axios
      .get(`${MOVIE_BASE_URL}${filter}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return result;
  }

  async getSpecificMovie(id) {
    if (!id || typeof id !== "string") {
      throw new Error("The id that was provided was invalid");
    }

    const result = await axios
      .get(`${MOVIE_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return result;
  }

  async getSpecificMovieQuotes(id, option) {
    if (!id || typeof id !== "string") {
      throw new Error("The id that was provided was invalid");
    }

    const filter = makeFilter(Object.assign(this.defaultOption, option));

    const result = await axios
      .get(`${MOVIE_BASE_URL}/${id}${QUOTE_BASE_ENDPOINT}${filter}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return result;
  }
}
