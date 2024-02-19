// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9PNdCj-CRHrvcvhDa2QXcAgZGg9JFXA4",
  authDomain: "dctestv2.firebaseapp.com",
  projectId: "dctestv2",
  storageBucket: "dctestv2.appspot.com",
  messagingSenderId: "841780931411",
  appId: "1:841780931411:web:16d62fd1913799e8ab8fa6",
  measurementId: "G-CELLPB3FBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}
// const analytics = getAnalytics(app);