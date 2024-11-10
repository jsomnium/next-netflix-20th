"use client"
import { useEffect } from 'react';
import { useContentStore } from '../../../../store/useMovieStore';
import { Movie } from '../../../../types/movie';
import { TvShow } from '@/types/tvshows';

export default function Preview() {
    const { movies, tvShows, fetchAllContents } = useContentStore();

    useEffect(() => {
      fetchAllContents();
    }, []);
  
    // 데이터를 모두 통합해서 하나의 배열로 병합
    const combinedMovies = Object.values(movies).flat();
    const combinedTvShows = Object.values(tvShows).flat();
    const combinedContent: (Movie | TvShow)[] = [...combinedMovies, ...combinedTvShows];
    if (combinedContent.length === 0) return null;

  return (
    <section className="w-full mt-[33px]">
      <h2 className="text-[26.75px] font-bold mb-[23px]">Previews</h2>
      <article className="flex items-center overflow-x-scroll scrollbar-hide gap-[7px]">
        {combinedContent.map((item, index) => (
          <div
            key={index}
            className="min-w-[102px] min-h-[102px] w-[102px] h-[102px] flex-shrink-0 overflow-hidden "
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={
                'title' in item
                  ? item.title || 'No Title'
                  : item.name || 'No Title'
              }
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </article>
    </section>
  );
}
