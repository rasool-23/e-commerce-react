import { motion } from "framer-motion";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = (item) => {
  // console.log(item.item);

  return (
    <div className="proit cursor-pointer mb-2">
      <div>
        <Link to={`/shop/${item.item.id}`}>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.item.imgUrl}
            alt="Product img"
          />
        </Link>
      </div>
      <div className="p-2 hover:text-inherit">
        <h3 className="text-[1.1rem] text-[#0a1d37] mt-4">
          <Link to={`/shop/${item.item.id}`}>{item.item.productName}</Link>
        </h3>
        <span className="text-center text-[.9rem]">{item.item.category}</span>
      </div>
      <div className="flex items-center justify-between p-2">
        <span className="text-[1.3rem] font-medium text-[#0a1d37]">
          ${item.item.price}
        </span>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="font-[1.2rem] p-[5px] bg-[#0a1d37] rounded-full">
          <IoAddOutline color="white" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
