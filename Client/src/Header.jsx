import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = localStorage.getItem("authToken");

    if (authToken == "" || !authToken || authToken == undefined) {
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
      navigate("/");
    }
  }, [isLoggedIn]);

  const HandleLogout = () => {
    axios
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        localStorage.setItem("authToken", "");

        toast("Logout Successfull");

        setTimeout(() => {
          window.location.reload();
          navigate("/");
        }, 500);
      })
      .catch((err) => {});
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      

        {isLoggedIn == true ? (
          <Link to="/home">
            {" "}
            <div className="text-white text-lg pt-3 pl-5 font-bold "> Secrets </div>
          </Link>
        ) : (
            <Link to="/home">
                  <div className="text-white text-lg pl-5 font-bold ">Home</div>
            </Link>
          
        )}

        <div className="space-x-7 pr-5">
          {isLoggedIn == true ? (
            <>
              {" "}
              <Link to="/create-secret">
                <button className="text-white hover:text-gray-300">
                  Create Secret
                </button>
              </Link>
              <button
                onClick={HandleLogout}
                className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-700 "
              >
                Logout
              </button>
              <ToastContainer />
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-white hover:text-gray-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-500  hover:bg-blue-700 px-5  py-2 rounded text-white  ">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
