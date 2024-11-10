import Header from './_components/Header';
import MovieCategory from './_components/MovieCategory';
import MovieRow from './_components/MovieRow';
import Preview from './_components/Preview';
import Span from './_components/Span';


export default function Home() {
  return (
    <div className='scrollbar-hide w-full h-[100vh] flex flex-col items-center'>
      <Header/>
      <Span/>
      <Preview/>
      {/* <MovieRow category='trending' title='Trending Now'/> */}
      {/* <MovieCategory/> */}
    </div>
  );
}
