import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center p-4 md:justify-center">
      <div className="md:flex-[0.6] flex-initial">
        <img src={logo} alt="logo" className="cursor-pointer w-32" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
          <NavbarItem key={item + i} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        <ul
          className={`z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white ${
            toggleMenu ? "" : "translate-x-full"
          } transition ease-out duration-500  `}
        >
          <li className="tex-xl w-full my-2">
            <AiOutlineClose
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          </li>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
            <NavbarItem key={item + i} title={item} classProps="my-2 text-lg" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
