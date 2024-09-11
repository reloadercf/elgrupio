// @ts-nocheck

import { SetStateAction, useEffect, useState } from 'react';
import Dialogs from '../components/Dialogs';
import { closeSession } from '../lib/auth';
import { createMessageGroup } from '../lib/message';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../lib/firebaseinit';


export default function Chat({user}:{user:string}) {
  const [text, setText]=useState('')
  const [allMessagesFire, setMensajes]=useState(null)
  
  const handleSetText=(e: { target: { value: SetStateAction<string>; }; })=>{
    setText(e.target.value)
  }

  const q = query(collection(db, "group"));

  useEffect(()=>{
    onSnapshot(q, (querySnapshot) => {
      const allMessages = [];
      querySnapshot.forEach((doc) => {
          allMessages.push(doc.data());
      });
      setMensajes(allMessages);
    });
  },[])
  

  return (
    <div className="h-screen w-screen fixed">
      <nav className='w-full p-4 flex justify-between'>
          <span className="text-lg bg-gradient-to-r from-pink-600 to-orange-500 text-transparent bg-clip-text">
            El grupo
          </span>
          <button className='bg-slate-200 mx-2 px-2' onClick={closeSession}> Cerrar session</button>
      </nav>
      <div className="h-full w-full pb-4 grid grid-cols-4 grid-rows-8 gap-3">
        <ul className="col-span-1 row-span-8 border-r border-gray-200">
          <li className="flex justify-center p-1 border border-gray-200">General</li>
        </ul>
        <span className="col-span-3 row-span-6 overflow-y-auto grid grid-cols-2">
          {allMessagesFire&& allMessagesFire.map((msj, i)=><Dialogs key={i} message={msj.message} user={msj.user} date={msj.date} currentUser={user}/>)}
        </span>
        <span className="col-start-2 col-end-5 row-start-7 row-end-9 mr-3 flex items-start">
            <input type="text" placeholder="Escribe un chisme..." className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500" value={text} onChange={handleSetText}/>
            <button className="bg-gradient-to-r from-pink-600 to-orange-500 text-white px-4 py-2 rounded-md ml-2" onClick={()=>{
              createMessageGroup(text, user )
              setText('')
              }}>Enviar</button>
        </span>
      </div>
    </div>
  )
}
