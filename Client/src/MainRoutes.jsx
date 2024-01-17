
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import CreateSecret from "./createSecret";
import Login1 from "./auth/Login";
import Signup from "./auth/Signup";
import Protected from "./ProtectedRoute";
import LandingPage from "./LandingPage";

const MainRoutes = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      setisLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login1 />} />
        <Route
          path="/home"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Homepage />
            </Protected>
          }
        />
        <Route
          path="/create-secret"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <CreateSecret />
            </Protected>
          }
        />
          
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
