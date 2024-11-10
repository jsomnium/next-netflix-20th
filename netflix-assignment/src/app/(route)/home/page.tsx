import Header from './_components/Header';
import Preview from './_components/Preview';
import Span from './_components/Span';


export default function Home() {
  return (
    <div className='scrollbar-hide w-full h-[100vh] flex flex-col items-center'>
      <Header/>
      <Span/>
      <Preview/>
    </div>
  );
}
