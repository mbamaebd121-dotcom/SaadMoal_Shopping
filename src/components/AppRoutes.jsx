import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductAddForm from "../pages/ProductAddForm";

function AppRoutes() {
  return (
    <div className="mt-16 lg:ml-70 py-5 px-5 md:px-10 bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productAddForm" element={<ProductAddForm />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;