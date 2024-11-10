import Header from './_components/Header';
import MovieCategory from './_components/MovieCategory';
import MovieRow from './_components/MovieRow';
import Preview from './_components/Preview';
import Span from './_components/Span';


export default function Home() {
  return (
    <div className='overflow-y-auto scrollbar-hide w-full min-h-[100vh] flex flex-col items-center'>
      <Header/>
      <Span/>
      <Preview/>
      <MovieRow category='popular' title='Popular'/>
      <MovieRow category='top_rated' title='Top Rated'/>

      {/* <MovieCategory/> */}
    </div>
  );
}
