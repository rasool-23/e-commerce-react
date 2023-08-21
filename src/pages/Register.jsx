import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { useRef } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const signupUser = async (e) => {
    e.preventDefault();
    const username = formRef?.current[0].value;
    const email = formRef?.current[1].value;
    const password = formRef?.current[2].value;
    const file = formRef?.current[3].files[0];
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <Helmet>
      <section>
        <div className="container">
          <div className="row">
            {loading ? (
              <h5 className="text-center text-xl">Loading...</h5>
            ) : (
              <div className="col mx-auto text-center max-w-[50%] lg:p-6">
                <h3 className="font-bold text-xl mb-4">Signup</h3>
                <form
                  className="bg-[#0a1d37] rounded-md p-10"
                  onSubmit={signupUser}
                  ref={formRef}>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4"
                    required
                    // value={username}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4"
                    required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4"
                    required
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="file"
                    placeholder="Enter your password"
                    name="file"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4 text-white cursor-pointer"
                    required
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 1.1 }}
                    className="outline-none py-2 px-5 rounded-md bg-[#fff] text-[#0a1d37] text-[.9rem] md:text-4 cursor-pointer mt-[40px] w-1/2 font-semibold ">
                    Signup
                  </motion.button>
                  <p className="mt-7">
                    Do you have an account?{" "}
                    <Link to="/login" className="text-[#cccccc]">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Register;
