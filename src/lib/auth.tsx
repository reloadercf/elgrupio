import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseinit";

export const loginGoogle=async()=>{
    try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)
            const user = result.user;
            return user
    }
    catch(error){
        console.error(error);
        
      };
}

export const closeSession=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    console.error(error);
  });
}
