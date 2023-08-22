import { BiSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import userIcon from "../assets/images/user-icon.png";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const AdminNav = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(true);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const admin__nav = [
    {
      display: "Dashboard",
      path: "dashboard",
    },
    {
      display: "All-Products",
      path: "dashboard/all-products",
    },
    {
      display: "Users",
      path: "dashboard/users",
    },
  ];
  return (
    <>
      <header className="w-full bg-[#0a1d37] py-5 px-0">
        <div className="admin-nav__top w-full ">
          <div className="container">
            <div className="admin-nav-wrapper flex items-center justify-between gap-3">
              <div className="logo">
                <h2 className="text-[1.2rem] text-[#c0c0c0]">AllModern</h2>
              </div>
              <div
                className="serch-box cursor-all-scroll
            flex items-center justify-between w-[50%] bg-white  rounded-md outline-none border border-[#d6e5fb] pr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" w-full py-2 px-3 rounded-md outline-none bg-transparent"
                />
                <div>
                  <BiSearch color="#c0c0c0" />
                </div>
              </div>
              <div className="admin-nav-top-right w-[40px] h-[40px] rounded-full flex items-center gap-8  relative">
                <div className="text-white">
                  <IoMdNotifications size={20} className="cursore-pointer" />
                </div>
                <div className="text-white">
                  <FiSettings size={20} className="cursore-pointer" />
                </div>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser?.photoURL : userIcon}
                  alt="user-icon"
                  className="w-6 h-6 md:w-[30px] md:h-[30px] rounded-full cursor-pointer "
                  onClick={() => setDropdown((prev) => !prev)}
                />
                <div
                  className={`profile-action absolute top-[90%]
               left-[100%] w-[150px] z-20 p-4 items-center flex-col bg-[#fdefe6] leading-7 ${
                 dropdown ? "flex" : "hidden"
               } cursor-pointer`}>
                  <div className="flex flex-col">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/dashboard/add-products">Add Product</Link>
                    <Link onClick={logout}>Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section
        id="admin"
        className="p-0 w-full h-[70px] leading-[70px] bg-[#fdefe6]">
        <div className="container">
          <div className="row">
            <div className="admin-navigation text-center">
              <ul className="menulist flex items-center justify-center gap-[2.7rem]">
                {admin__nav.map((item) => (
                  <li
                    className="admin-menu-item text-[#0a1d37]  rounded-md"
                    key={item.path}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "active bg-[#f5f5f5] py-[10px] px-[15px] "
                          : ""
                      }>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminNav;
