import { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/heroimg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import { ProductList } from "../components/UI/ProductList";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { useGetData } from "../hooks/useGetData";

const Home = () => {
  const { data: products, loading: loading } = useGetData("products");

  const [beddingProducts, setBeddingProducts] = useState([]);
  const [bathProducts, setBathProducts] = useState([]);
  const [outdoorProducts, setoutdoorProducts] = useState([]);
  const [lightingProducts, setLightingProducts] = useState([]);
  const [kitchenProducts, setKitchenProducts] = useState([]);
  const [babyProducts, setBabyProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredBeddingProducts = products.filter(
      (item) => item.category === "bedding"
    );
    const filteredBathProducts = products.filter(
      (item) => item.category === "bath"
    );
    const filteredOutdoorProducts = products.filter(
      (item) => item.category === "outdoor"
    );
    const filteredLightingProducts = products.filter(
      (item) => item.category === "lighting"
    );
    const filteredKitchenProducts = products.filter(
      (item) => item.category === "kitchen"
    );
    const filteredBabyProducts = products.filter(
      (item) => item.category === "baby-kids"
    );
    setBeddingProducts(filteredBeddingProducts);
    setBathProducts(filteredBathProducts);
    setoutdoorProducts(filteredOutdoorProducts);
    setLightingProducts(filteredLightingProducts);
    setKitchenProducts(filteredKitchenProducts);
    setBabyProducts(filteredBabyProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero bg-[#ECE8E3]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col">
              <div className="pt-0 sm:pt-[45px]">
                <p className="subtitle">Treding product in {year}</p>
                <div className="text-[#0a1d37] text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] font-semibold mx-0">
                  {/* Make Your Interior More Minimlistic & Modern */}
                  <h4 className="sm:text-[2rem] lg:text-[4rem]">
                    Hi, we&apos;re AllModern.{" "}
                  </h4>
                  <span className="sm:text-[2rem] lg:text-[3rem]">
                    Escape With Us
                  </span>{" "}
                </div>
                <p className="text-[#0a1d37] leading-[28px] text-[1.2rem] md:text-[1.1]">
                  We believe good design should be the standard for all, not a
                  luxury for the few
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
              <motion.div
                className="flex items-center mt-8"
                whileHover={{ scale: 1.05 }}>
                <img src={heroImg} alt="Hero image" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="tredingprod">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="pb-4 text-[1.4rem] md:text-[2rem] font-semibold">
                Trending Products
              </h2>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={beddingProducts} />
            )}
          </div>
        </div>
      </section>

      <section className="best__sales">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="pb-4 text-[1.4rem] md:text-[2rem] font-semibold">
                Bath
              </h2>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={bathProducts} />
            )}
          </div>
        </div>
      </section>

      <section className="timer__count bg-[#0a1d37] h-[300px]">
        <div className="container">
          <div className="sm:grid sm:grid-cols-2">
            <div className="">
              <div className="text-center sm:text-start">
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
                Outdoor
              </h2>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={outdoorProducts} />
            )}
            <ProductList data={lightingProducts} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
              <h2 className="sect it text-[# ] font-semibold text-[1.4rem]">
                Lighting
              </h2>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={lightingProducts} />
            )}
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
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={kitchenProducts} />
            )}
            {/* <ProductList data={wirelessProducts} /> */}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
              <h2 className="sect it text-[# ] font-semibold text-[1.4rem]">
                Baby-Kids
              </h2>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <ProductList data={babyProducts} />
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
