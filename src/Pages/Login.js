// Home.js
import React from "react";
import { useState } from "react";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      // doSendEmailVerification()
      console.log("succesfully logged in");
      window.location.href = '/dashboard'
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-serif font-bold">Login Page</h1>
      <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          className="p-3 m-4 rounded-md border border-black w-1/3"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="p-3 m-4 rounded-md border border-black w-1/3"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="p-3 m-4 rounded-md border w-1/5 bg-red-800 text-white font-bold tracking-wider hover:bg-blue-600 hover:scale-105 transition-all"
        >
          Login
        </button>
    </div>
  );
}

export default Login;
