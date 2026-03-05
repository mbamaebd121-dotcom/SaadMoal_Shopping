import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductAddForm from "../pages/ProductAddForm";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";


function AppRoutes() {
  return (
    <div className="mt-16 lg:ml-50 py-5 px-5 md:px-10 bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productAddForm" element={<ProductAddForm />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkOut" element={<Checkout />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
