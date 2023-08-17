import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-[60px] pb-[30px] bg-[#0a1d37] ">
      <div className="container">
        <div className="row w-full flex justify-between gap-10">
          <div className="w-[33.33333%]">
            <div className="flex items-center gap-2">
              <Link to="/home">
                <h1 className="text-[1.2rem] font-bold text-white">
                  Multimart
                </h1>
              </Link>
            </div>
            <p className="mt-4 leading-[30px] text-[#ffffff75]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              voluptatibus sequi fuga nostrum praesentium vel sed ex totam hic
              qui.
            </p>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-xl text-white mb-[30px]">Top Categories</h4>
              <ul>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="#">Mobile Phones</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="#">Arm Chair</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="#">Watches</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-xl text-white mb-[30px]">Useful Links</h4>
              <ul>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="login">Login</Link>
                </li>
                <li className="text-[#ffffff75] mb-[20px]">
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h4 className="text-xl text-white mb-[30px]">Contact</h4>
              <ul>
                <li className="text-[#ffffff75] mb-[20px] flex items-center gap-2">
                  <HiOutlineLocationMarker size={20} />
                  <p>123 Kibray, Tashkent, Uzbekistan</p>
                </li>
                <li className="text-[#ffffff75] mb-[20px] flex items-center gap-2">
                  <AiOutlinePhone />
                  <p>+998 33 6543210</p>
                </li>
                <li className="text-[#ffffff75] mb-[20px] flex items-center gap-2">
                  <MdOutlineEmail />
                  <p>example123@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright mt-[50px] text-center text-[.9rem]">
          <p>Copyright {year} developed by Rasool. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
