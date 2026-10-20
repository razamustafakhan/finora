import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../modules/auth/hooks/useAuth";

const UserRoute = () => {
  const { userData, loading } = useAuth();
  console.log("UserRoute:", {
    userData,
    loading,
  });

  // Wait until authentication state is loaded
  if (loading) {
    return null;
  }

  // User is not logged in or is not a normal user
  if (!userData || userData.role !== "user") {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default UserRoute;
