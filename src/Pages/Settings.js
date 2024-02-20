// Home.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import delData from "../firebase/firestore/delData";
async function fetchDatafromFirestore(str) {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, str));
  const data = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.id);
  });
  return data;
}

function Home() {
  const { currentUser } = useAuth();
  React.useEffect(() => {
    if (
      currentUser == null ||
      // eslint-disable-next-line eqeqeq
      currentUser.uid != "DvGWITPEKncbVCPIpMDs8HNYZY93"
    ) {
      window.location.href = "/Login";
    } else {
    }
  }, [currentUser]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData(str) {
      const data = await fetchDatafromFirestore(str);
      setUserData(data);
      console.log(userData);
    }
    fetchData(currentUser.uid);
  }, [currentUser.uid, userData]);
  const deletedata = (uid, coll) => {
    delData(uid, coll);
  };
  
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-3xl font-serif font-bold">Settings Page</h1>
      <div className=" p-4 rounded-md border-2 w-2/3 h-[800px] m-4 overflow-y-scroll flex flex-col items-center">
        {/* <div className="w-full my-4 p-10 border">Rishi</div> */}
        {userData.map((value) => (
          <div className="w-11/12 mb-2 px-6 py-2 rounded-md border bg-stone-100 hover:scale-105 transition-all flex flex-row justify-between">
            <div className="font-mono text-lg px-4 py-2">{value}</div>
            <div>
              <button
                onClick={() => deletedata(currentUser.uid, value)}
                className="bg-red-500 px-4 py-2 mx-3 rounded-md font-bold hover:brightness-75 transition-all"
              >
                del
              </button>
              <button className="bg-blue-500 px-4 py-2 mx-3 mr-0 rounded-md font-bold hover:brightness-75 transition-all">
                add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
