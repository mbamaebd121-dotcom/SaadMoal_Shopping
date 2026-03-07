import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import CheckOutProvider from "./context/CheckOutContext.jsx";
import HelpContextProvider from "./context/HelpContext.jsx";
import OrderContextProvider from "./context/OrdersContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <ProductsContextProvider>
          <AuthProvider>
            <CheckOutProvider>
              <HelpContextProvider>
                <OrderContextProvider>
                <App />
                </OrderContextProvider>
              </HelpContextProvider>
            </CheckOutProvider>
          </AuthProvider>
        </ProductsContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
