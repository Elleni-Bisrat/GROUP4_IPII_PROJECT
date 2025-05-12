import React, { useState } from "react";
import Navigate from "../component/Nav";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

function Login() {
  

  return (
    <div
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: "url('/images/book.png')" }}
    >
      <Navigate />
     
      <Footer />
    </div>
  );
}

export default Login;
