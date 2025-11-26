import "./App.css";
import Nav from "./layouts/container/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import FooterPage from "./layouts/container/footer";

import Products from "./pages/component/Products";
import ProductDetails from "./Components/Products/productDetailsSetion";
import RateReview from "./pages/component/Ratin&Review";
import CategoryPage from "./pages/component/categoryPage";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productdetail" element={<ProductDetails />} />
          <Route path="/rate-review" element={<RateReview  />} />
           <Route path="/category" element={<CategoryPage  />} />
          

        </Routes>

        <FooterPage />
      </div>
    </>
  );
}

export default App;
