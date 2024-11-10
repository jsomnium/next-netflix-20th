"use client"

import { useEffect } from 'react';
import { useContentStore } from '../../../../store/useMovieStore';

type Props = {
  category: string;
  title: string;
};

export default function MovieRow({ category, title }: Props) {
  const { movies, fetchCategoryMovies } = useContentStore();

  useEffect(() => {
    fetchCategoryMovies(category);
  }, [category]);

  return (
    <section className='w-full h-[191px] mt-[22px]'>
      <h2 className="text-[20.92px] font-bold mb-[14px]">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-[7px]">
        {movies.map((movie) => (
          <div key={movie.id} className="w-[103px] h-[161px] flex-shrink-0 rounded-[2px]">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
