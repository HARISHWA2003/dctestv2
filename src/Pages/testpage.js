import { useState } from "react";
import { doSignInWithEmailAndPassword } from "./firebase/auth";
import { Link } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
      // doSendEmailVerification()
      console.log("succesfull");
    }
  };

  return (
    <div className="w-full h-screen bg-[#0C0404] flex justify-center items-center">
      <div className="bg-[#F8F8FF] w-4/12 h-3/5 rounded-md flex flex-col justify-evenly items-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          className="p-3 rounded-md border w-2/3"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="p-3 rounded-md border w-2/3"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="p-3 rounded-md border w-2/3 bg-red-800 text-white font-bold tracking-wider hover:bg-blue-600 hover:scale-105 transition-all"
        >
          Login
        </button>
        <Link
          href="/page1"
          className="btn-lg text-2xl font-semibold text-white tracking-wide bg-[#298a87] hover:shadow-md hover:shadow-black flex w-1/5 font-mono justify-center items-center rounded-3xl ml-10 hover:scale-105 hover:font-bold transition-all"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

