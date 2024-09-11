// @ts-nocheck
import { useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebaseinit";

import Login from "./layouts/login"
import Chat from "./layouts/Chat"

export default function App() {
  const [session, setSession] = useState(null)

  const handleSession=(info)=>{
    setSession(info)
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      handleSession(user)
      console.log('sigue');
      
    } else {
      handleSession(null)
      console.log('sin user');
      
    }
  });

  return (
    <div className="px-0 py-0 h-screen w-screen">
      {session?<Chat user={session.email}/>:<Login/>}
    </div>
  )
}