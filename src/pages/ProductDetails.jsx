import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <div className="container">
          <div className="row grid grid-cols-2">
            <div>
              <img src={imgUrl} alt={productName} />
            </div>
            <div className="details mt-[70px] ">
              <div className="product-details">
                <h2 className="text-[1.6rem] mb-3">{productName}</h2>
                <div className="flex items-center gap-5 mb-3">
                  <div className="pro-reting flex items-center">
                    <AiFillStar color="coral" />
                    <AiFillStar color="coral" />
                    <AiFillStar color="coral" />
                    <AiFillStar color="coral" />
                    <BiSolidStarHalf color="coral" />
                    {/* <AiFillStar color="" /> */}
                  </div>
                  <p>
                    <span className="">{avgRating} </span>
                    retings.
                  </p>
                </div>
                <span className="text-[1.3rem] font-medium mt-3">${price}</span>
                <p>{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium">
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
