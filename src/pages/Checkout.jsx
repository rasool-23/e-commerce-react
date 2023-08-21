import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <div className="container">
          <div className="row flex gap-4">
            <div className="col max-w-[66%]">
              <h6 className="mb-4 font-bold">Billing Information</h6>
              <form action="" className="billing-form">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                  <input
                    type="phone"
                    placeholder="Phone number"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className="border border-[#d6e5fb] w-full py-2 px-3 rounded-md mt-4"
                  />
                </div>
              </form>
            </div>
            <div className="col max-w-[33%] w-full">
              <div className="checokut-cart p-5 bg-[#0a1d37] text-white rounded-md">
                <h6 className="flex items-center justify-between mb-5">
                  Total Quantity: <span>{totalQuantity}</span>
                </h6>
                <h6 className="flex items-center justify-between mb-5">
                  Subtotal: <span>{totalAmount}</span>
                </h6>
                <h6 className="flex items-center justify-between mb-5">
                  <span>
                    Shipping:
                    <br /> free shipping
                  </span>
                  <span>$0</span>
                </h6>
                {/* <h6 className="flex items-center justify-between mb-5">
                  Free Shipping
                </h6> */}
                <h4 className="flex items-center justify-between border-t pt-5">
                  Total Coast: <span>{totalAmount}</span>
                </h4>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="outline-none py-2 px-5 rounded-md bg-[#fff] text-[#0a1d37] text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium w-full">
                  Place an order
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
