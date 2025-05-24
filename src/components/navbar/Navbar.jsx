import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import imgLogo from "../../img/logo.png";

const navMenus = [
  { name: "Home", link: "/#Landing" },
  { name: "Events Listing", link: "/#about" },
  { name: "Event Details", link: "/#services" },
  { name: "User Profile", link: "/login" },
  { name: "Calendar", link: "/calendar" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-[#3D5300] py-5 shadow dark:text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <img src={imgLogo} alt="" className=" bg-[#3D5300] w-50 h-20"/>

        {/* Desktop Button Menu */}
        <div className="hidden sm:flex space-x-20">
          {navMenus.map((menu) => (
            <button key={menu.name} onClick={() => navigate(menu.link)} className="text-[#FEFAE0] font-medium">
              {menu.name}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Hamburger */}
        <div className="sm:hidden flex items-center gap-4">
          {theme === "dark" ? (
            <BiSolidSun
              className="text-2xl cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BiSolidMoon
              className="text-2xl cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
          <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Button Menu */}
      {showMenu && (
        <div className="sm:hidden px-6 pt-4 pb-6 bg-[#3D5300] shadow-md rounded-b-xl">
          <ul className="flex flex-col gap-3">
            {navMenus.map((menu) => (
              <li key={menu.name}>
                <a href={menu.link}>
                  <button className="text-[#FEFAE0] font-medium">{menu.name}</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
