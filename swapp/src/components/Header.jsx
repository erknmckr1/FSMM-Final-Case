import React, { useState } from "react";
import Logo from "../ui/Logo";
import RightSide from "../ui/RightSide";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  //nav kısmının acılıp kapanması ıcın olusturdugumus state...
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="w-full relative  z-50 h-[5.5rempx] ">
      <div className="relative h-[5.5rem]  bg-black sm:text-secondary text-white font-bold w-screen flex justify-center ">
        <div className="container  flex justify-between items-center">
          <Logo />
          <button onClick={toggleMenu} className="sm:hidden block">
            <img className="w-[40px] h-[40px]" src="/swicon.png" alt="menu" />
          </button>

          <nav
            className={`flex flex-col sm:flex-row  z-50  bg-black sm:bg-transparent top-16 left-28 sm:w-[250px] w-[150px]  items-center sm:justify-center ${
              isMenuOpen ? "block" : "hidden"
            } sm:block sm:static absolute text-[20px]`}
          >
            <NavLink className={`mx-2 ${location.pathname === "/" ? 'text-white' : ""}`} to="/">
              Home
            </NavLink>
            <NavLink className={`mx-2 ${location.pathname === "/characters" ? 'text-white' : ""}`} to="/characters">
              Characters
            </NavLink>
            <NavLink className={`mx-2 ${location.pathname === "/shıps" ? 'text-white' : ""}`} to="/shıps">
              Shıps
            </NavLink>
          </nav>

          <RightSide />
        </div>
      </div>
      
    </div>
  );
}

export default Header;
