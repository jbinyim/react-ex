const API_KEY = "59b4be61d805cacbf60b7127d2470338";
const BASE_PATH = "https://api.themoviedb.org/3";

interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieResult[];
}

export interface RatedMovie {
  page: number;
  results: MovieResult[];
}

export const getNowMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?language=ko-kr&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getRatedMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/top_rated?language=ko-kr&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
};
