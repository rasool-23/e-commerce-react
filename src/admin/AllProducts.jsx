import { AiOutlineDelete } from "react-icons/ai";
import { useGetData } from "../hooks/useGetData";
import { motion } from "framer-motion";
// import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

function AllProducts() {
  const { data: products, loading: loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc, "products", id);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col w-full">
            <table className="w-full text-center">
              <thead className="border-b">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item) => (
                  <tr key={item.id}>
                    <td className="">
                      <img
                        src={item.imgUrl}
                        alt="img"
                        className="w-[100px] h-[100px] object-contain
                mx-auto
                "
                      />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <motion.td
                      whileTap={{ scale: 1.1 }}
                      className="cursor-pointer hover:bg-[#c0c0c040]"
                      onClick={() => deleteProduct(item.id)}>
                      <AiOutlineDelete size={20} className="mx-auto" />
                    </motion.td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
