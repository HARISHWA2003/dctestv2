import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
const Dashboard = () => {
  const { currentUser } = useAuth();
  const [mail, setMail] = useState("");
  const [uid, setUid] = useState("");
  React.useEffect(() => {
    if (currentUser == null) {
      window.location.href = '/Login'
    } else {
      const mail = setMail(currentUser.email);
      const uid = setUid(currentUser.uid);
      
    }
  }, []);
  const settings = async (e) => {
    e.preventDefault();
    window.location.href = '/Settings'
  }
  const onSubmit = async (e) => {
    e.preventDefault();
      await doSignOut();
      // doSendEmailVerification()
      console.log("succesfully logged out");
      window.location.href = '/'
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="text-3xl font-serif font-bold">Dashboard</div>
      <div className="m-4">Hello {uid}, your mail is {mail}</div>
      {(uid === 'DvGWITPEKncbVCPIpMDs8HNYZY93') && 
        <button type="submit"
        onClick={settings} className="p-3 bg-stone-500 rounded-md w-1/5 text-white font-bold tracking-wider hover:scale-105 hover:brightness-75 transition-all">Settings</button>
      }
      <button
          type="submit"
          onClick={onSubmit}
          className="p-3 m-4 rounded-md border w-1/5 bg-red-800 text-white font-bold tracking-wider hover:bg-blue-600 hover:scale-105 transition-all"
        >
          Sign out
        </button>
    </div>
  );
};

export default Dashboard;
