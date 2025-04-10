/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router";

const RedirectUnauthenticatedUser = ({ children }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Render children only if there is a user
  if (!user) {
    return null; // Don't render anything while redirecting
  }

  return <>{children}</>;
};

export default RedirectUnauthenticatedUser;
