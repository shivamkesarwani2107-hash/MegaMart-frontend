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
import Payment from "./frontend/payment";
import Orders from "./frontend/orders";
import Wishlist from "./frontend/wishlist";
import ProtectedRoute from "./frontend/ProtectedRoute";
import Delivery from "./frontend/delivery";
import Fresh from "./frontend/fresh";
import Collection from "./frontend/collection";
import Secure from "./frontend/secure";
import Thankyou from "./frontend/thankyou";
import DeliveryInformation from "./frontend/deliveryInformation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/help" element={<Help />} />
        <Route path="/category/:route" element={<CategoryProducts />} />
        <Route path="/subcategory/:id" element={<SubCategoryProducts />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/secure" element={<Secure />} />
        <Route path="/deliveryInformation" element={<DeliveryInformation />} />

        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />

        <Route path="/orders" element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        } />

        <Route path="/wishlist" element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        } />

        <Route path="/thankyou" element={
          <ProtectedRoute>
            <Thankyou />
          </ProtectedRoute>
        }
        />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />

    </BrowserRouter>
  );
}

export default App;