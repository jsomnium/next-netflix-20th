import axios from 'axios';
import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: 'en-US',
    page: 1,
  },
});

// 영화 데이터를 카테고리별로 가져오는 함수
export const fetchMoviesByCategory = async (category: string): Promise<Movie[]> => {
  try {
    const response = await instance.get(`/movie/${category}`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for category ${category}:`, error);
    return [];
  }
};

// TV 프로그램 데이터를 카테고리별로 가져오는 함수
export const fetchTVByCategory = async (category: string): Promise<TvShow[]> => {
  try {
    const response = await instance.get(`/tv/${category}`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching TV shows for category ${category}:`, error);
    return [];
  }
};
