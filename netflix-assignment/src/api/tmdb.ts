import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  });
  

  export const fetchMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get('/api/movies');
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
  export const fetchTvShows = async (): Promise<TvShow[]> => {
    try {
    const response = await axios.get('/api/tv');
    return response.data.results;
} catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
}
};
  
  