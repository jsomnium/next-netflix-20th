import { create } from 'zustand';
import { fetchMoviesByCategory, fetchTVByCategory } from '../api/tmdb';
import { Movie } from '../types/movie';
import { TvShow } from '../types/tvshows';

type ContentState = {
    movies: { [key: string]: Movie[] };
    tvShows: { [key: string]: TvShow[] };
    loading: boolean;
    fetchAllContents: () => Promise<void>;
};

export const useContentStore = create<ContentState>((set) => ({
    movies: {},
    tvShows: {},
    loading: false,


    fetchAllContents: async () => {
        set({ movies: {}, tvShows: {}, loading: true }); // 기존 데이터 초기화
        try {
          // 영화 카테고리별로 가져오기
          const movieCategories = ['popular', 'top_rated', 'now_playing', 'upcoming'];
          const moviePromises = movieCategories.map((category) =>
            fetchMoviesByCategory(category)
          );
          const movieResults = await Promise.all(moviePromises);
          const movies = movieCategories.reduce((acc, category, index) => {
            acc[category] = movieResults[index];
            return acc;
          }, {} as { [key: string]: Movie[] });
    
          // TV 시리즈 카테고리별로 가져오기
          const tvCategories = ['popular', 'top_rated', 'airing_today', 'on_the_air'];
          const tvPromises = tvCategories.map((category) =>
            fetchTVByCategory(category)
          );
          const tvResults = await Promise.all(tvPromises);
          const tvShows = tvCategories.reduce((acc, category, index) => {
            acc[category] = tvResults[index];
            return acc;
          }, {} as { [key: string]: TvShow[] });
    
          set({ movies, tvShows });
        } catch (error) {
          console.error('Error fetching all contents:', error);
        } finally {
          set({ loading: false });
        }
    },
}));

