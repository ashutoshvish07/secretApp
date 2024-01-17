import axios from "axios";
import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get-secrets")
      .then((res) => {
        setData(res.data.secrets);
      })
      .catch((err) => []);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full  text-center">
          <h1 className="text-4xl font-semibold  py-6">Secrets</h1>

          {data.map((elem, index) => (
            <div
              key={index}
              className="bg-white  p-5 md:mx-6 lg:mx-12 xl:mx-16 shadow-md rounded-md m-2  text-lg text-gray-800"
            >
              {elem.secret}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
