import Logo from '../../../../assets/svg/home-logo.svg';

export default function NavBar() {
  return (
    <nav className='absolute top-[24px] left-[16px] w-[338px] h-[57px] flex justify-around items-center'>
      
      {[<Logo/>, "TV Shows", "Movies", "My List"].map((item, index) => (
            <button
              key={index}
              className="text-white text-[17.2px] font-normal"
            >
              {item}
            </button>
          ))}
    </nav>
  );
}
