"use client"

import { Movie } from '@/types/movie';
import { useContentStore } from '../../../../store/useContentStore';
import { TvShow } from '@/types/tvshows';

type Props = {
  title: string;

  content: Movie[] | TvShow[];

};

export default function ContentRow({ title, content }: Props) {


  if (!content || content.length === 0) return null;
  const getAltText = (item: Movie | TvShow) => {
      if ('title' in item) return item.title;
      if ('name' in item) return item.name;
      return 'No Title';
    };
  const getPrefix = (item: Movie | TvShow) => {
      if ('title' in item) return 'movie';
      if ('name' in item) return 'tv';
      return 'No';
    }
    


  return (
    <section className='w-full h-[191px] mt-[22px]'>
      <h2 className="text-[20.92px] font-bold mb-[14px]">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide gap-[7px]">
        {content.map((item) => (
          <div key={`${getPrefix(item)}-${item.id}`} className="w-[103px] h-[161px] flex-shrink-0 rounded-[2px]">
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={getAltText(item)}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
