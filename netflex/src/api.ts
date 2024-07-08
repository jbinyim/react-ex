const API_KEY = "59b4be61d805cacbf60b7127d2470338";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: string;
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

export interface UpcomingMovie {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieResult[];
}

export interface SearchI {
  page: number;
  results: MovieResult[];
}

export interface GenreI {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface VideoI {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
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

export const getUpComingMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/upcoming?language=ko-kr&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getSearchMovies = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}/search/multi?query=${keyword}&include_adult=false&language=ko-kr&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getGenre = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getVideo = (movieId: number) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/videos?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};
