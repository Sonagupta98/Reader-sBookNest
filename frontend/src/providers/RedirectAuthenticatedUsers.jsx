/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/authStore"; 
import { useEffect } from "react";

const RedirectAuthenticatedUser = ({ children }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [ user, navigate]);

  // Render children only if no user is logged in
  if (user) {
    return null; // Don't render anything while redirecting
  }

  return <>{children}</>;
};

export default RedirectAuthenticatedUser;
