import { db } from "./firebaseinit";
import { collection, addDoc } from "firebase/firestore"; 

export const createMessageGroup=async(message: string, user: string)=>{
    await addDoc(collection(db, "group"), {
        user,
        message,
        date:new Date().toLocaleString()
      });
}