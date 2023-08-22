import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const AddProducts = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const productName = formRef?.current[0].value;
    const productShortDesc = formRef?.current[1].value;
    const productDescription = formRef?.current[2].value;
    const productPrice = formRef?.current[3].value;
    const productCategory = formRef?.current[4].value;
    const productImg = formRef?.current[5].files[0];
    // setLoading(true);

    try {
      const docRef = collection(db, "products");
      const storageRef = ref(storage, `productImages/${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        () => {
          toast.error("Image not uploaded");
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then(
            async (downloadURL) => {
              await addDoc(docRef, {
                productName: productName,
                shortDesc: productShortDesc,
                description: productDescription,
                category: productCategory,
                price: productPrice,
                imgUrl: downloadURL,
              });
              console.log("render 1");
            }
          );
          console.log("render 2");
        }
      );
      // setLoading(false);
      toast.success("Product created successfully");
      // navigate("/dashboard/all-products");
    } catch (error) {
      // setLoading(false);
      console.log(error.message);
      toast.error(error.message);
      console.log("render error");
    }
    console.log("render 3");
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            <div className="col w-full">
              <h4 className="mb-5 font-bold">Add Product</h4>
              <form ref={formRef} onSubmit={handleAddProduct}>
                <div className="mt-4">
                  <span>Product title</span>
                  <input
                    type="text"
                    placeholder="Double sofa"
                    className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <span>Short description</span>
                  <input
                    type="text"
                    placeholder="Lorem..."
                    className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                    required
                  />
                </div>
                <div className="mt-4">
                  <span>Description</span>
                  <input
                    type="text"
                    placeholder="Description..."
                    className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                    required
                  />
                </div>
                <div className="flex items-center justify-between gap-4 mt-4">
                  <div className="w-1/2">
                    <span>Price</span>
                    <input
                      type="text"
                      placeholder="$100"
                      className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <span>Category</span>
                    <select
                      className="w-full border rounded-md py-[10px] px-3 border-[#0a1d37] outline-none "
                      required>
                      <option value="">Select category</option>
                      {/* <option value="furniture">Furniture</option> */}
                      <option value="outdoor">Outdoor</option>
                      <option value="lighting">Lighting</option>
                      <option value="decor-pillow">Decor-pillow</option>
                      <option value="bedding">Bedding</option>
                      <option value="bath">Bath</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="storage">Storage</option>
                      <option value="baby-kids">Baby-kids</option>
                      <option value="new">New</option>
                      <option value="sale">Sale</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <span>Products image</span>
                  <input
                    type="file"
                    placeholder="Choose a file"
                    className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none cursor-pointer"
                    required
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  type="submit"
                  className="outline-none py-2 px-5 rounded-md bg-[#0a1d37] text-[#fff] text-[.9rem] md:text-4 cursor-pointer mt-[40px] font-medium ">
                  Add Products
                </motion.button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
