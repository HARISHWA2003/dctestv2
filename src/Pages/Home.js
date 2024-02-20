// Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-3xl font-serif font-bold">Home Page</h1>
      <div className="flex justify-center">
        <Link to="/Login" className="underline text-lg text-blue-500">Login</Link>
        <div className="mx-4 text-blue-500">|</div>
        <Link to="/Signup" className="underline text-lg text-blue-500">Sign up</Link>
      </div>
    </div>
  );
}

export default Home;
