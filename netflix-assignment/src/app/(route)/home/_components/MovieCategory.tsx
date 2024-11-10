import { categories } from '../../../../data/categories';
import MovieRow from './MovieRow';

export default function MovieCategory() {
  return (
    <div className="w-full ">
      {categories.map((item) => (
        <div key={item.category} className="mb-8">
          <MovieRow category={item.category} title={item.title}/>
        </div>
      ))}
    </div>
  );
}
