import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = () => {
    axios
      .post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        let token = res.data.token;
        localStorage.setItem("authToken", token);
        toast.success("Login successfull");

        setTimeout(() => {
          window.location.reload();
          navigate("/create-secret");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <section class="py-12 md:py-20 bg-white">
      <div class="container px-4 mx-auto">
        <div class="max-w-sm mx-auto">
          <div class="mb-6 text-center">
            <h3 class="mb-4 text-2xl md:text-3xl font-bold">
              Sign in to your account
            </h3>
          </div>
          <form action="">
            <div class="mb-6">
              <label class="block  mb-2  text-coolGray-800 font-medium" for="">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="dev@shuffle.dev"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-coolGray-800 font-medium" for="">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                class="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div class="flex flex-wrap items-center justify-between mb-6">
              <div class="w-full md:w-1/2">
                <label class="relative inline-flex items-center">
                  <input
                    class="form-checkbox appearance-none"
                    type="checkbox"
                  />
                  <img
                    class="absolute top-1/2 transform -translate-y-1/2 left-0"
                    src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                    alt=""
                  />
                  <span class="ml-7 text-xs text-coolGray-800 font-medium">
                    Remember me
                  </span>
                </label>
              </div>
              <div class="w-full md:w-auto mt-1">
                <a
                  class="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <a
              onClick={HandleLogin}
              class="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
            >
              Sign In
            </a>
            <ToastContainer />

            <p class="text-center">
              <span class="text-xs font-medium">
                Don’t have an account
                <Link to="/signup">
                  <a className=" text-blue-500 hover:text-blue-900 px-2 py-2 rounded">
                    Sign Up
                  </a>
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
