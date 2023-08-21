import { motion } from "framer-motion";
import { useRef, useState } from "react";

const AddProducts = () => {
  const formRef = useRef();
  // const title = formRef.current

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col w-full">
            <h4 className="mb-5">Add Product</h4>
            <form ref={formRef}>
              <div>
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Double sofa"
                  className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                />
              </div>
              <div>
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Lorem..."
                  className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="max-w-1/2">
                  <span>Price</span>
                  <input
                    type="text"
                    placeholder="$100"
                    className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                  />
                </div>
                <div className="max-w-1/2 ">
                  <span>Category</span>
                  <select
                    name=""
                    id=""
                    className="w-full p-2 border rounded-md py-2 px-3 border-[#0a1d37] outline-none">
                    <option value="chair">Chair</option>
                    <option value="chair">Sofa</option>
                    <option value="chair">Mobile</option>
                    <option value="chair">Watch</option>
                    <option value="chair">Wireless</option>
                  </select>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 1.1 }}
                type="submit"
                className="outline-none py-2 px-5 rounded-md bg-[#fff] text-[#0a1d37] text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium w-full">
                Add Products
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
