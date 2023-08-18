import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { BsBag, BsHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);
  // const menuToggle = () => menuRef.current.classList.toggle("active-menu");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
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

  useEffect(() => {
    stickyHeader();

    // return () => window.removeEventListener("scroll", stickyHeader);
  });

  return (
    <header
      className="w-full h-[60px] md:h-[70px] flex justify-center items-center"
      ref={headerRef}>
      <div className="container">
        <div className="nav-wrapper flex items-center justify-between text-[#0a1d37]">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center  gap-2">
              <img src={logo} alt="logo" className="w-4 h-4 md:w-6 md:h-6" />
              <h1 className="text-[1rem] md:text-[1.2rem] font-bold">
                Multimart
              </h1>
            </Link>
          </div>
          <nav
            className={`fixed top-0 left-0 w-full h-full bg-[#00000050] z-[9999] md:bg-inherit md:block md:w-auto md:h-auto md:static  items-center justify-between ${
              menuToggle ? "block md:hidden" : "md:block hidden"
            }`}
            ref={menuRef}
            onClick={() => setMenuToggle(false)}>
            <ul className="menu absolute top-0 right-0 w-[250px] h-full bg-[#fff] flex flex-col justify-center items-center gap-[2.7rem] md:static md:flex md:flex-row z-[99999]">
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
                size={20}
                color={"#0a1d37"}
                className="cursore-pointer "
              />
              <span className="badge flex justify-center items-center absolute top-[-25%] right-[-30%] bg-[#0a1d37] rounded-full text-[.7rem] font-semibold z-10 text-white w-[16px] h-[16px]">
                1
              </span>
            </div>
            <div className="relative">
              <BsBag size={20} color={"#0a1d37"} className="cursore-pointer" />
              <span className="badge flex justify-center items-center absolute top-[-25%] right-[-30%] bg-[#0a1d37] rounded-full text-[.7rem] font-semibold z-10 text-white w-[16px] h-[16px]">
                {totalQuantity}
              </span>
            </div>

            <motion.img
              whileTap={{ scale: 1.2 }}
              src={userIcon}
              alt="user-icon"
              className="w-6 h-6 md:w-[30px] md:h-[30px] cursor-pointer"
            />
            <div
              className="md:hidden "
              onClick={() => setMenuToggle((prev) => !prev)}>
              <AiOutlineMenu
                size={20}
                color={"#0a1d37"}
                className="cursore-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
