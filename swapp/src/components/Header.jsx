import React, { useState } from "react";
import Logo from "../ui/Logo";
import RightSide from "../ui/RightSide";
import { NavLink } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import OutsideClickHandler from "react-outside-click-handler";
function Header() {
  //nav kısmının acılıp kapanması ıcın olusturdugumus state...
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // nav kısmının dısındakı alanlara tıklayınca isMenuOpen degerını false yapması ıcın olusturduk. React-outline-slick kutuphanesını kullandıgımız ıcın sarmaladıgımız dıv dısında bır yere tıkladıgımız zaman state'ın durumu false donecek.
  // const clickOutSide = () =>{
  //   setIsMenuOpen(false)
  // }
  return (
    <div className="w-full  z-50 h-[150px] ">
      <div className="relative h-[5.5rem] opacity-90 bg-black sm:text-secondary text-white font-bold w-screen flex justify-center ">
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
            <NavLink className="mx-2" to="/">
              Home
            </NavLink>
            <NavLink className="mx-2" to="/characters">
              Characters
            </NavLink>
            <NavLink className="mx-2" to="/shıps">
              Shıps
            </NavLink>
          </nav>

          <RightSide />
        </div>
      </div>
      {/* page paginatıon sstart */}
      <PaginationBar/>
      {/* page paginatıon end */}
    </div>
  );
}

export default Header;
