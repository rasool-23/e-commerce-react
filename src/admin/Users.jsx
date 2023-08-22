import { AiOutlineDelete } from "react-icons/ai";
import { useGetData } from "../hooks/useGetData";
import { motion } from "framer-motion";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data: products, loading: loading } = useGetData("products");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("User deleted successfully");
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <h4>Users</h4>
        </div>
        <div className="pt-5">
          <table className="w-full text-center">
            <thead className="border-b">
              <tr>
                <th>Image</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item) => (
                <tr key={item.id}>
                  <td className="pt-4">
                    <img
                      src={item.photoURL}
                      alt="img"
                      className="w-[80px] h-[80px] object-contain
                mx-auto
                "
                    />
                  </td>
                  <td>{item.displayName}</td>
                  <td>{item.email}</td>
                  <motion.td
                    whileTap={{ scale: 1.1 }}
                    className="cursor-pointer hover:bg-[#c0c0c040]"
                    onClick={() => deleteUser(item.uid)}>
                    <AiOutlineDelete size={20} className="mx-auto" />
                  </motion.td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Users;
