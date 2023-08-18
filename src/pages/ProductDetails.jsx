import { Link, NavLink, useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProductList } from "../components/UI/ProductList";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;

  const relatetProduct = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success("Review submitted successfully");
    console.log(reviewUserName, reviewUserMsg, rating);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} className="py-[70px] px-0" />
      <section className="pt-0">
        <div className="container">
          <div className="row grid grid-cols-1 sm:grid-cols-2">
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
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-[1.3rem] font-medium mt-3">
                    ${price}
                  </span>
                  <span className="text-base font-medium mt-3">
                    Category: {category}
                  </span>
                </div>
                <p>{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium"
                  onClick={addToCart}>
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tabwrapper flex items-center gap-5 text-[#0a1d37] font-medium text-[1rem]">
                <Link
                  className={`${tab === "desc" ? "active" : ""}`}
                  onClick={() => setTab("desc")}>
                  Description
                </Link>
                <Link
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "active" : ""}`}>
                  Reviews ({reviews.length})
                </Link>
              </div>
              {tab === "desc" ? (
                <div className="tabcontet mt-5">
                  <p className="leading-7">{description}</p>
                </div>
              ) : (
                <div className="review mt-5">
                  <div className="revieww">
                    <ul>
                      {reviews.map((item, i) => (
                        <li key={i} className="mb-4">
                          <h6>John Doe</h6>
                          <span className="text-[#FF7F50]">
                            {item.rating} ( reting)
                          </span>
                          <p className="mt-2">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="reviewform w-[70%] m-auto mt-[50px]">
                      <h4 className="text-semibold mb-[30px] text-[1.2rem]">
                        Leave your experience
                      </h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="formgroup">
                          <input
                            ref={reviewUser}
                            type="text"
                            placeholder="Enter name"
                            className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                            required
                          />
                        </div>
                        <div className="formgroup flex items-center gap-5 my-[20px]">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center text-[#ff7f50] cursor-pointer"
                            onClick={() => setRating(1)}>
                            1
                            <AiFillStar color="#ff7f50" />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center text-[#ff7f50] cursor-pointer"
                            onClick={() => setRating(2)}>
                            2
                            <AiFillStar color="#ff7f50" />
                          </motion.span>{" "}
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center text-[#ff7f50] cursor-pointer"
                            onClick={() => setRating(3)}>
                            3
                            <AiFillStar color="#ff7f50" />
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center text-[#ff7f50] cursor-pointer"
                            onClick={() => setRating(4)}>
                            4
                            <AiFillStar color="#ff7f50" />
                          </motion.span>{" "}
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center text-[#ff7f50] cursor-pointer"
                            onClick={() => setRating(5)}>
                            5
                            <AiFillStar color="#ff7f50" />
                          </motion.span>
                        </div>
                        <div>
                          <textarea
                            ref={reviewMsg}
                            type="text"
                            placeholder="Review Message..."
                            className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col">
              <h2 className="related-title font-semibold text-[1.2rem] mt-[30px]">
                You might also like
              </h2>
            </div>
            <ProductList data={relatetProduct} />
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
