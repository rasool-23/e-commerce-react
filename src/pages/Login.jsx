import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    const email = formRef.current[0].value;
    const password = formRef.current[1].value;
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setLoading(false);
      toast.success("Successfully signed in");
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet>
      <section>
        <div className="container">
          <div className="row">
            {loading ? (
              <h5 className="text-bold text-center">Loading...</h5>
            ) : (
              <div className="col mx-auto text-center max-w-[50%] lg:p-6">
                <h3 className="font-bold text-xl mb-4">Login</h3>
                <form
                  className="bg-[#0a1d37] rounded-md p-10"
                  onSubmit={signIn}
                  ref={formRef}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="border border-[#0a1d37] w-full py-2 px-3 rounded-md mt-4"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 1.1 }}
                    className="outline-none py-2 px-5 rounded-md bg-[#fff] text-[#0a1d37] text-[.9rem] md:text-4 cursor-pointer mt-[40px] w-1/2 font-semibold ">
                    Login
                  </motion.button>
                  <p className="mt-7">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup" className="text-[#cccccc]">
                      Create an account
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

export default Login;
