import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/ProductsContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
