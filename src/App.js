import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontend/home";
import Cart from "./frontend/cart";
import Header from "./frontend/header";
import Footer from "./frontend/footer";
import Contact from "./frontend/contact";
import Login from "./frontend/login";
import Signup from "./frontend/signup";
import Products from "./frontend/products";
import Help from "./frontend/help";
import Profile from "./frontend/profile";
import CategoryProducts from "./frontend/CategoryProducts.js";
import SubCategoryProducts from "./frontend/SubCategoryProducts.js"
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:route" element={<CategoryProducts />} />
        <Route path="/subcategory/:id" element={<SubCategoryProducts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;