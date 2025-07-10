/*import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const config = {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response = await axios.get<MoviesResponse>(BASE_URL, config);
  return response.data;
}*/

/*import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(
  query: string,
  page: number = 1 // Сделали page необязательным, по умолчанию 1
): Promise<MoviesResponse> {
  const config = {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response = await axios.get<MoviesResponse>(BASE_URL, config);
  return response.data;
}*/

import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchMovies(
  query: string,
  page: number = 1
): Promise<MoviesResponse> {
  const config = {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const response = await axios.get<MoviesResponse>(BASE_URL, config);
  return response.data;
}
