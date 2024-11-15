import { Movie } from '@/types/movie';
import { TvShow } from '@/types/tvshows';
import axios from 'axios';



export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get('/api/movies');
        console.log(response)
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
export const fetchMoviesByCategory = async (category: string): Promise<Movie[]> => {
    try {
      const response = await axios.get(`/api/movies/${category}`, {
        params: { language: 'en-US', page: 1 },
      });
      return response.data.results;
    } catch (error) {
      console.error(`Error fetching movies for category ${category}:`, error);
      return [];
    }
  };
  export const fetchTVByCategory = async (category: string): Promise<TvShow[]> => {
    try {
      const response = await axios.get(`/api/tv/${category}`, {
        params: { language: 'en-US', page: 1 },
      });
      return response.data.results;
    } catch (error) {
      console.error(`Error fetching tvshow for category ${category}:`, error);
      return [];
    }
  };


  
  