import { create } from 'zustand';
import { fetchMovies, fetchTvShows } from '../api/tmdb';
import { Movie } from '../types/movie';
import { TvShow } from '../types/tvshows';

type ContentState = {
  movies: Movie[];
  tvShows: TvShow[];
  fetchMovies: () => Promise<void>;
  fetchTvShows: () => Promise<void>;
  fetchAllContent: () => Promise<void>;
};

export const useContentStore = create<ContentState>((set) => ({
  movies: [],
  tvShows: [],

  // 영화 데이터만 가져오는 함수
  fetchMovies: async () => {
    try {
      const movies = await fetchMovies();
      set({ movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },

  // TV 프로그램 데이터만 가져오는 함수
  fetchTvShows: async () => {
    try {
      const tvShows = await fetchTvShows();
      set({ tvShows });
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  },

  // 영화와 TV 프로그램 데이터를 모두 가져오는 함수
  fetchAllContent: async () => {
    try {
      const [movies, tvShows] = await Promise.all([fetchMovies(), fetchTvShows()]);
      set({ movies, tvShows });
    } catch (error) {
      console.error('Error fetching all content:', error);
    }
  },
}));
