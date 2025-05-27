import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import imgLogo from "../../img/logo.png";

const navMenus = [
  { name: "Home", link: "/home" },
  { name: "Events Listing", link: "/events-listing/events_listing" },
  { name: "Event Details", link: "/#services" },
  { name: "Dashboard", link: "/dashboard/user-profile" },
  { name: "Calendar", link: "/calendar/calendar" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateLoginStatus = () => {
      const loggedIn = !!localStorage.getItem("loggedInUser");
      setIsLoggedIn(loggedIn);
    };
  
    updateLoginStatus(); // check immediately on mount
    window.addEventListener("userLoginStatusChanged", updateLoginStatus);
  
    return () => {
      window.removeEventListener("userLoginStatusChanged", updateLoginStatus);
    };
  }, []);
  

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleNavigation = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      alert("Please log in to access this page.");
    }
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-[#3D5300] py-5 shadow dark:text-white">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img src={imgLogo} alt="Logo" className="bg-[#3D5300] w-50 h-20" />

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-20">
            {navMenus.map((menu) => (
              <button
                key={menu.name}
                onClick={() => handleNavigation(menu.link)}
                className="text-[#FEFAE0] font-medium"
              >
                {menu.name}
              </button>
            ))}
          </div>

          {/* Theme toggle + Hamburger */}
          <div className="sm:hidden flex items-center gap-4">
            {theme === "dark" ? (
              <BiSolidSun className="text-2xl cursor-pointer" onClick={() => setTheme("light")} />
            ) : (
              <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")} />
            )}
            <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="sm:hidden px-6 pt-4 pb-6 bg-[#3D5300] shadow-md rounded-b-xl">
            <ul className="flex flex-col gap-3">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <button
                    onClick={() => handleNavigation(menu.link)}
                    className="text-[#FEFAE0] font-medium"
                  >
                    {menu.name}
                  </button>
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
