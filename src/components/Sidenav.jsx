import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

import { MdOutlineReviews } from 'react-icons/md';

export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />{' '}
      {nav ? (
        <div className="fixed z-20 flex h-screen w-full flex-col items-center justify-center bg-white/90">
          <a
            href="#main"
            onClick={() => setNav(false)}
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Hem</span>
          </a>

          <a
            href="#resume"
            onClick={() => setNav(false)}
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            <BsPerson size={20} />
            <span className="pl-4">CV</span>
          </a>
          <a
            href="#reviews"
            onClick={() => setNav(false)}
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          >
            {/* <MdOutlineReviews size={20} />
            <span className="pl-4">Recesioner</span>
          </a>
          <a
            href="#contact"
            onClick={() => setNav(false)}
            className="m-2 flex w-[75%] cursor-pointer items-center justify-center rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-200 ease-in hover:scale-110"
          > */}
            <AiOutlineMail size={20} />
            <span className="pl-4">Kontakt</span>
          </a>
        </div>
      ) : (
        <div className="fixed top-[25%] z-20 hidden md:block">
          <div className="flex flex-col">
            <a
              href="#main"
              className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <AiOutlineHome size={20} />
            </a>

            <a
              href="#resume"
              className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <BsPerson size={20} />
            </a>
            {/* <a
              href="#reviews"
              className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <MdOutlineReviews size={20} />
            </a> */}
            <a
              href="#contact"
              className="m-2 cursor-pointer rounded-full bg-gray-100 p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
