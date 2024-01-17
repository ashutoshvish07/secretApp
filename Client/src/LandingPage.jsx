// LandingPage.js
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <img
          src="./home.svg"
          alt="Secret Image"
          className="mx-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mb-8 -mt-8  p-8 rounded-md shadow-md"
        />

        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Share your any one Secret
        </h1>
        <p className="text-lg text-gray-600">
          Discover the power of sharing secrets in a safe and secure
          environment.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
