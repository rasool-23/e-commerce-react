import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        pauseOnHover={false}
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
      <Layout />
    </>
  );
}

export default App;
