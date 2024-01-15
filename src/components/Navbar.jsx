import { styles } from "../styles";
import { navLinks } from "../contents";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-[300px] h-[60px] object-contain" />
          </Link>
        </div>
        <div className=" justify-center items-center flex">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${ 
                  active === link.title ? "text-[#fff] border-t-[3px] border-b-[3px] p-[6px] border-[#fff] rounded-[10px] " : "text-white"
                }  hover:text-[#540824] p-[6px] cursor-pointer text-[15px] font-medium`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              className="w-[28px] h-[28px] cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
              src={toggle ? close : menu}
              alt="menu"
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-[#e2c234]" : "text-white"
                    }  hover:text-[#a2860d] font-poppins cursor-pointer text-[15px] hover:text-[18px] font-medium`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
