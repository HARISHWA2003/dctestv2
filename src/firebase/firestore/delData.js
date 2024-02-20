import app from "../firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);
export default async function delData(collection, id) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, collection, id));
  } catch (e) {
    error = e;
  }

  return { result, error };
}