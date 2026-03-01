import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();

  if (loading) return null
  if (!session) return <Navigate to="/login" />

  return children
}

export default ProtectedRoute;