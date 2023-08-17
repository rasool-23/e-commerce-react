import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import { ProductList } from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero bg-[#d6e5fb]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="col">
              <div className="pt-0 sm:pt-[45px]">
                <p className="subtitle">Treding product in {year}</p>
                <h2 className="text-[#0a1d37] text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] font-semibold my-5 mx-0">
                  Make Your Interior More Minimlistic & Modern
                </h2>
                <p className="text-[#0a1d37] leading-[28px] text-[.9rem] md:text-[1.1]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus, enim quis assumenda omnis quasi voluptates cum sit
                  fugiat architecto deleniti mollitia facere error labore
                  distinctio recusandae molestiae fugit eaque ullam?
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium">
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
      <section className="tredingprod">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="sect it text-[1.4rem] md:text-[2rem] font-semibold">
                Trending Products
              </h2>
            </div>
            <ProductList data={trendingProducts} />
          </div>
        </div>
      </section>

      <section className="best__sales">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="sect it text-[# ] font-semibold text-[1.4rem]">
                Best Salec
              </h2>
            </div>
            <ProductList data={bestSalesProducts} />
          </div>
        </div>
      </section>

      <section className="timer__count bg-[#0a1d37] h-[300px]">
        <div className="container">
          <div className="sm:grid sm:grid-cols-2">
            <div className="">
              <div className="text-center">
                <h4 className="text-white text-base md:text-xl mb-3 ">
                  Limited Offers
                </h4>
                <h3 className="text-white text-base md:text-2xl mb-3">
                  Quality Armchair
                </h3>
              </div>
              <Clock />
              <div className="flex justify-center md:block">
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#fff] text-0a1d37 text-base cursor-pointer mt-[40px] font-semibold text-center">
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </div>
            </div>
            <div className="hidden sm:flex justify-end">
              <img
                src={counterImg}
                alt="img"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
              <h2 className="sect it text-[# ] font-semibold text-[1.4rem]">
                New Arrivals
              </h2>
            </div>
            <ProductList data={mobileProducts} />
            {/* <ProductList data={wirelessProducts} /> */}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
              <h2 className="sect it text-[# ] font-semibold text-[1.4rem]">
                Popular in Category
              </h2>
            </div>
            <ProductList data={popularProducts} />
            {/* <ProductList data={wirelessProducts} /> */}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
