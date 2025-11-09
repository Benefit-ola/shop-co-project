import "./App.css";
import Nav from "./layouts/container/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import FooterPage from "./layouts/container/footer";

import Products from "./pages/component/Products";
import ProductDetails from "./Components/Products/productDetailsSetion";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
           <Route path="/productdetail" element={<ProductDetails
 />} />
          

        </Routes>

        <FooterPage />
      </div>
    </>
  );
}

export default App;
