import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';
import instance from '@/utils/axiosInstance';

const fetchMoviesByCategory = async (category: string): Promise<Movie[]> => {
  const response = await axios.get(`/movie/${category}`);
  return response.data.results;
};

const fetchTvShowsByCategory = async (category: string): Promise<TvShow[]> => {
  const response = await axios.get(`/tv/${category}`);
  return response.data.results;
};

// 모든 카테고리의 영화를 가져오는 함수
const fetchAllMovies = async (): Promise<{ [key: string]: Movie[] }> => {
  const categories = ['popular', 'top_rated', 'now_playing', 'upcoming'];
  const moviePromises = categories.map(fetchMoviesByCategory);
  const results = await Promise.all(moviePromises);

  return categories.reduce((acc, category, index) => {
    acc[category] = results[index];
    return acc;
  }, {} as { [key: string]: Movie[] });
};

// 모든 카테고리의 TV 시리즈를 가져오는 함수
const fetchAllTvShows = async (): Promise<{ [key: string]: TvShow[] }> => {
  const categories = ['popular', 'top_rated', 'airing_today', 'on_the_air'];
  const tvPromises = categories.map(fetchTvShowsByCategory);
  const results = await Promise.all(tvPromises);

  return categories.reduce((acc, category, index) => {
    acc[category] = results[index];
    return acc;
  }, {} as { [key: string]: TvShow[] });
};
// 개별 카테고리의 영화를 가져오는 훅
export const useFetchMovies = (category: string) => {
    return useQuery({
      queryKey: ['movies', category],
      queryFn: () => fetchMoviesByCategory(category),
      staleTime: 1000 * 60 * 60, // 1시간 캐싱
    });
  };
  
  // 개별 카테고리의 TV 시리즈를 가져오는 훅
  export const useFetchTvShows = (category: string) => {
    return useQuery({
      queryKey: ['tv', category],
      queryFn: () => fetchTvShowsByCategory(category),
      staleTime: 1000 * 60 * 60,
    });
  };
  
  // **모든 카테고리의 영화를 가져오는 훅**
  export const useFetchAllMovies = () => {
    return useQuery({
      queryKey: ['allMovies'],
      queryFn: fetchAllMovies,
      staleTime: 1000 * 60 * 60,
    });
  };
  
  // **모든 카테고리의 TV 시리즈를 가져오는 훅**
  export const useFetchAllTvShows = () => {
    return useQuery({
      queryKey: ['allTvShows'],
      queryFn: fetchAllTvShows,
      staleTime: 1000 * 60 * 60,
    });
  };
  const fetchAllMovies2 = async () => {
    const response = await axios.get('/api/movies');
    return response.data;
  };