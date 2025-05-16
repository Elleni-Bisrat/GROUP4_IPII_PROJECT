import React, { useState } from "react";
import Navigate from "../component/Nav";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e, type) => {
    setError("");
    const val = e.target.value;
    switch (type) {
      case "user":
        setUser(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "pass1":
        setPass1(val);
        break;
      case "pass2":
        setPass2(val);
        break;
      default:
    }
  };

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user || !email || !pass1 || !pass2) {
      setError("All fields are required");
      return false;
    }
    if (user.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (pass1.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setIsLoading(true);
    setError("");
    setMsg("");

    try {
      const response = await fetch("http://localhost/loginphp/signup.php", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user: user,
          email: email,
          password: pass1,
          confirm_password: pass2
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.result || "Registration failed");
      }

      setMsg(data.result || "Signup successful!");
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/images/book.png')" }}>
      <Navigate />
      <div className="flex items-center justify-center min-h-[91vh]">
        <div className="rounded-lg shadow-lg p-10 bg-black/50 backdrop-blur-md ">
          <form onSubmit={handleSubmit}>
            <p className="mb-2 w-44">
              {error ? (
                <span className="text-red-500">{error}</span>
              ) : (
                <span className="text-green-400">{msg}</span>
              )}
            </p>

            <label>Username</label><br />
            <input
              type="text"
              value={user}
              onChange={(e) => handleInput(e, "user")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br />
            <label>Email</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => handleInput(e, "email")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br />
            <label>Password</label><br />
            <input
              type="password"
              value={pass1}
              onChange={(e) => handleInput(e, "pass1")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br />
            <label>Confirm Password</label><br />
            <input
              type="password"
              value={pass2}
              onChange={(e) => handleInput(e, "pass2")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br /><br />
            <button
              type="submit"
              className="h-10 w-64 p-2 bg-green-500 rounded hover:bg-green-900 disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Signup"}
            </button>
            <p className="mt-4 pl-8">Have an account
              <Link to="/login" className="text-blue-400 "> login</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;