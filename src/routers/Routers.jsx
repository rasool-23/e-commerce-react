import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import AddProducts from "../admin/AddProducts";
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Routers = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/*" element={<ProtectedRoute />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/dashboard/all-products" element={<AllProducts />} /> */}
        {/* <Route path="/dashboard/add-products" element={<AddProducts />} /> */}
      </Routes>
    </Suspense>
  );
};

export default Routers;
