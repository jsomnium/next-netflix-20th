import Logo from '../../../../assets/svg/home-logo.svg';

export default function NavBar() {
  return (
    <nav className='absolute top-[24px] left-0 right-0 w-[338px] h-[57px] flex justify-around items-center'>
      <Logo />
      {["TV Shows", "Movies", "My List"].map((item, index) => (
            <button
              key={index}
              className="text-white text-[17.2px] hover:underline"
            >
              {item}
            </button>
          ))}
    </nav>
  );
}
