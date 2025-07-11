import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export interface Movie {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

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
