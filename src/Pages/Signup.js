// Home.js
import React from "react";
import { useState } from "react";
import addData from "../firebase/firestore/addData";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
        name: name,
        email: email,
        password: password
    }
    // eslint-disable-next-line no-unused-vars
    const { result, error } = await addData('DvGWITPEKncbVCPIpMDs8HNYZY93', name, data);
    if (error) {
      return console.log(error);
    } else {
      alert("succesfully added");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-3xl font-serif font-bold">Signup Page</h1>
      <input
          type="name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          className="p-3 m-4 rounded-md border border-black w-1/3"
        />
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
          Signup
        </button>
    </div>
  );
}

export default Login;
