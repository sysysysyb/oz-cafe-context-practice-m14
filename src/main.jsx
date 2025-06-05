import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuContext } from "./contexts/menuContext.jsx";
import { CartContext } from "./contexts/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MenuContext>
      <CartContext>
        <App />
      </CartContext>
    </MenuContext>
  </BrowserRouter>
);
