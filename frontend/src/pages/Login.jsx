
import React, { useState } from "react";
import Navigate from "../component/Nav";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

function Login() {
  const[user,setUser]=useState("");
  const[password, setPassword]=useState("");
  const [email, setEmail] = useState("");
  const[error,setError]=useState("");
  const [msg,setMsg]=useState("");

  const handleInput=(e,type)=>{
      switch(type){
        case "user":
          setError("");
          setUser(e.target.value);
          if(e.target.value===""){
            setError("User field is empty");
          }
        break;
          case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email is empty");
        }
        break;
        case "password":
          setError("");
          setPassword(e.target.value);
          if(e.target.value===""){
            setError("Password filed is empty");
          }
        break;
        default:
      }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!user||!email||!password){
      setError("All fields are required");
      setMsg("");
      return;
    }

    setError("");
    setMsg("Logging in...");

    
    fetch("http://localhost/loginphp/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        email: email,
        password: password,
      }),
    })
      .then(async (response) => {
        const text = await response.text();
        console.log("Raw response:", text);
        try {
          const json = JSON.parse(text);
          if (
            json.result === "Invalid username!" ||
            json.result === "Invalid email!" ||
            json.result === "Invalid password!"
          ) {
            setError(json.result);
            setMsg("");
          } else {
            setMsg(json.result);
            setError("");
          }
        } catch (err) {
          setError("JSON parse error: " + text.slice(0, 100));
        }
      })
      .catch((err) => {
        setError("Fetch error: " + err.message);
      });
    setUser("");
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="bg-cover bg-center h-screen  text-white"
      style={{ backgroundImage: "url('/images/book.png')" }}
    >
      <Navigate />
          <div className="flex  items-center justify-center min-h-[91vh]">
          <div className="rounded-lg shadow-lg p-10 bg-black/50 backdrop-blur-md ">
            <form action="" method="" onSubmit={handleSubmit}>
               <div className="w-45">
              <p className="mb-4">
                {error !== "" ? (
                  <span className="text-red-500">{error}</span>
                ) : (
                  <span className="text-green-400">{msg}</span>
                )}
              </p>
            </div>
              <label htmlFor=""> User Name</label>
              <br/>
              <input 
              type="text" 
              value={user}
              onChange={(e)=>handleInput(e,"user")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
             />
             <br/>
                <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => handleInput(e, "email")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br />
             <label className="items-center" htmlFor="">Password</label>
             <br/>
             <input
              type="password"
              value={password}
              onChange={(e) => handleInput(e, "password")}
              className="focus:outline-none rounded text-black w-64 p-2 mb-4"
            />
            <br/>
            <br/>
            <button className="h-10 w-64   bg-green-600 rounded hover:bg-green-900">
            <Link to="logindestination">Login</Link>
            </button>
            <p className="mt-5 pr-4 ">Don't have an account 
              <Link to="/signup" className="text-blue-400 ml-2">signup</Link>
            </p>
            </form>
            </div>
          </div>
      <Footer />
    </div>
  );
}

export default Login;