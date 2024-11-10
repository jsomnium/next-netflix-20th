"use client"
import { useEffect } from 'react';
import { useContentStore } from '../../../../store/useMovieStore';
import { Movie } from '../../../../types/movie';

export default function Preview() {
  const { movies, fetchMovies } = useContentStore();

  useEffect(() => {
    fetchMovies();
  }, []);

  if (movies.length === 0) return null;

  return (
    <section className="w-full mt-[33px]">
      <h2 className="text-[26.75px] font-bold mb-[23px]">Previews</h2>
      <article className="flex items-center overflow-x-scroll scrollbar-hide gap-[7px]">
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="min-w-[102px] min-h-[102px] w-[102px] h-[102px] flex-shrink-0 overflow-hidden "
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </article>
    </section>
  );
}
