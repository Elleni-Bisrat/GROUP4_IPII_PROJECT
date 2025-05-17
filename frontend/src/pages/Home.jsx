import React from "react";
import About from "./Aboutus";
import { Link } from "react-router-dom";
import Navigate from "../component/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <About />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: "url('/images/book.png')" }}
    >
       <Navigate />
      <div className="flex flex-col  justify-center mt-40 ml-6 px-4">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          ALL IN ONE SOFTWARE
          <br />
          ENGINEERING COURSES
        </h1>
        <p className="px-2 py-1 rounded-md text-white mb-6">
          "make your life easier by finding like this website"
        </p>
        <button className="bg-green-400 hover:bg-green-500 text-white w-80 ml-4 h-12 font-semibold px-8 py-3 rounded-full text-lg">
          <Link to="/signup">Sign-up</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;