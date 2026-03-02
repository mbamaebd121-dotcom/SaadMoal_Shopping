import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./components/Layaout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { session } = useAuth();

  return (
    <Routes>

      {/* صفحات عامة */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* صفحات محمية */}
      <Route
        path="/*"
        element={
          <ProtectedRoute session={session}>
            <MainLayout />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;