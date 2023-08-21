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
  // const title = formRef.current
  // console.log(formRef.current[0].value);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const productTitle = formRef?.current[0].value;
    const productShortDesc = formRef?.current[1].value;
    const productDescription = formRef?.current[2].value;
    const productPrice = formRef?.current[3].value;
    const productCategory = formRef?.current[4].value;
    const productImg = formRef?.current[5].files[0];
    setLoading(true);

    // const product = {
    //   title: productTitle,
    //   shortDesc: productShortDesc,
    //   description: productDescription,
    //   category: productCategory,
    //   price: productPrice,
    //   imgUrl: productImg,
    // };

    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + productTitle}`
      );
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        () => {
          toast.error("Image not uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: productTitle,
              shortDesc: productShortDesc,
              description: productDescription,
              category: productCategory,
              price: productPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col w-full">
            <h4 className="mb-5">Add Product</h4>
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
                    className="w-full p-2 border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
                    required>
                    <option value="chair">Chair</option>
                    <option value="chair">Sofa</option>
                    <option value="chair">Mobile</option>
                    <option value="chair">Watch</option>
                    <option value="chair">Wireless</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <span>Products image</span>
                <input
                  type="file"
                  placeholder="Choose a file"
                  className="w-full border rounded-md py-2 px-3 border-[#0a1d37] outline-none"
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
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
