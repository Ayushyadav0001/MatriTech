import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Head";

const Home = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl  ">Welcome to Food's</h1>
      <h1 className="text-4xl">Kitchen</h1>
      <Link to="/menu" className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 mt-10">
        Go to Menu
      </Link>
    </div>
    </>
  );
};

export default Home;
