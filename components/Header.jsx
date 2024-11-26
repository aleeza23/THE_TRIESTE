'use client';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="flex border-b border-[#ffdc7c] flex-row justify-between items-center border-opacity-20 py-10 w-full text-white px-4 md:px-10 absolute top-0 left-0 z-10">
      <h1 className="text-2xl text-[#ffdc7c] font-pirata-one tracking-widest">THE TRIESTE</h1>
      <Navbar />
      <div className="text-white text-xl hidden md:block font-rambla">
      </div>
    </header>
  );
};

export default Header;
