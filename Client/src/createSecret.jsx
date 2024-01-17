import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSecret = () => {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCreateSecret = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        setError("User not authenticated");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/create-secret",
        { secret },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      toast.success("Secret created successfully");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
        console.log(error)
   toast.error(error.response.data.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-4">
        <h1 className="text-3xl font-bold mb-6">Create a Secret</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label
            htmlFor="secret"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Secret:
          </label>
          <input
            type="text"
            id="secret"
            name="secret"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleCreateSecret}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Create Secret
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateSecret;
