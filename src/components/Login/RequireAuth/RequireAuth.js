import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const location = useLocation();

  // =========================================
  // ===========(Have to do it again)=============
  // =========================================
  // 68-7 (advanced) Send jwt token in the server, verify and decode jwt token
  // =========================================
  // =========================================
  // =========================================

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
