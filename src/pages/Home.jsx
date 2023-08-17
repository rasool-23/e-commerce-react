import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero bg-[#d6e5fb]">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col">
              <div className="pt-[45px]">
                <p className="subtitle">Treding product in {year}</p>
                <h2 className="text-[#0a1d37] text-[2.5rem] font-semibold my-5 mx-0">
                  Make Your Interior More Minimlistic & Modern
                </h2>
                <p className="text-[#0a1d37] leading-[28px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus, enim quis assumenda omnis quasi voluptates cum sit
                  fugiat architecto deleniti mollitia facere error labore
                  distinctio recusandae molestiae fugit eaque ullam?
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-4 cursor-pointer mt-[40px] font-medium">
                  <Link to="/shop" className="hover:text-white">
                    SHOP NOW
                  </Link>
                </motion.button>
              </div>
            </div>
            <div className="col">
              <div className="herimg">
                <img src={heroImg} alt="Hero img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;
