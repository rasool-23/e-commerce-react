import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { BsBag, BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/shop",
      display: "Shop",
    },
    {
      path: "/cart",
      display: "Cart",
    },
  ];
  return (
    <header className="w-full h-[70px] pt-4">
      <div className="container">
        <div className="nav-wrapper flex items-center justify-between text-[#0a1d37]">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-6 h-6" />
            <h1 className="text-[1.2rem] font-bold">Multimart</h1>
          </div>
          <nav className="flex items-center justify-between">
            <ul className="menu flex items-center gap-[2.7rem] ">
              {navLinks.map((link) => (
                <li className="navitem font-medium" key={link.path}>
                  <NavLink to={link.path}>{link.display}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-[1.2rem] ">
            <div className="relative">
              <BsHeart
                size={25}
                color={"#0a1d37"}
                className="cursore-pointer "
              />
              <span className="badge flex justify-center items-center absolute top-[-25%] right-[-30%] bg-[#0a1d37] rounded-full text-[.7rem] font-semibold z-10 text-white w-[16px] h-[16px]">
                1
              </span>
            </div>
            <div className="relative">
              <BsBag size={25} color={"#0a1d37"} className="cursore-pointer" />
              <span className="badge flex justify-center items-center absolute top-[-25%] right-[-30%] bg-[#0a1d37] rounded-full text-[.7rem] font-semibold z-10 text-white w-[16px] h-[16px]">
                1
              </span>
            </div>

            <motion.img
              whileTap={{ scale: 1.2 }}
              src={userIcon}
              alt="user-icon"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
          <div className="sm:hidden ">
            <AiOutlineMenu
              size={25}
              color={"#0a1d37"}
              className="cursore-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
