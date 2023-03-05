import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateContext from "./context/StateContext";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Brief from "./components/Brief";
import "./App.css";

function App() {
  return (
    <StateContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/brief" element={<Brief />} />
        </Routes>
      </BrowserRouter>
    </StateContext>
  );
}

export default App;
