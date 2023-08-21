import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { AiOutlineDelete } from "react-icons/ai";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // console.log(cartItems);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <div className="container">
          {cartItems.length === 0 ? (
            <h2 className="text-center text-xl">No item added to the cart!</h2>
          ) : (
            <div className="flex">
              <div className="w-[70%]">
                <table className="w-full text-center">
                  <thead className="border-b">
                    <tr>
                      <th>Image</th>
                      <th>Title</th> <th>Price</th> <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, i) => (
                      <Tr item={item} key={i} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="">
                <div>
                  <h6 className="flex items-center justify-between font-semibold">
                    Subtotal:
                    <span className="text-[1.8rem] font-bold">
                      ${totalAmount}
                    </span>
                  </h6>
                </div>
                <p className="text-base">
                  Taxes and Shipin will calculate in checkout
                </p>
                <div>
                  <Link to="/checkout">
                    <button className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-10 font-medium w-full">
                      Chekout
                    </button>
                  </Link>
                  <Link to="/shop">
                    <button className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-white text-[.9rem] md:text-4 cursor-pointer mt-3 font-medium w-full">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Helmet>
  );
};

const Tr = (item) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.item.id));
  };
  return (
    <tr>
      <td className="">
        <img
          src={item.item.image}
          alt="img"
          className="w-[100px] h-[100px] object-contain
  mx-auto
  "
        />
      </td>
      <td>{item.item.productName}</td>
      <td>{item.item.price}</td>
      <td>{item.item.quantity}</td>
      <motion.td
        whileTap={{ scale: 1.1 }}
        className="cursor-pointer hover:bg-[#c0c0c040]"
        onClick={deleteProduct}>
        <AiOutlineDelete size={20} className="mx-auto" />
      </motion.td>
    </tr>
  );
};

export default Cart;
