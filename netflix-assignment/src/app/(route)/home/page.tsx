import { useContentStore } from '@/store/useMovieStore';
import Header from './_components/Header';
import MovieCategory from './_components/MovieCategory';
import MovieRow from './_components/ContentRow';
import NavBar from './_components/NavBar';
import Preview from './_components/Preview';
import Span from './_components/Span';
import TvCategory from './_components/TvCategory';


export default function Home() {

  return (
    <div className='relative w-full min-h-[100vh] pb-[80px] flex flex-col items-center'>
      <Header/>
      <NavBar/>
      <Span/>
      <Preview/>
      {/* <MovieRow category='popular' title='Popular' />
      <MovieRow category='top_rated' title='Top Rated' />
      <MovieRow category='now_playing' title='Now Playing' />
      <MovieRow category='upcoming' title='Upcoming' /> */}
      <MovieCategory />
      <TvCategory />
      {/* <MovieCategory/> */}
    </div>
  );
}
