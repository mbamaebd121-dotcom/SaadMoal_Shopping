import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./components/Layaout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
  return (
    <Routes>

      {/* صفحات عامة */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* صفحات محمية */}
      <Route
        path="/*"
        element={
          
            <MainLayout />
          
        }
      />

    </Routes>
  );
}

export default App;