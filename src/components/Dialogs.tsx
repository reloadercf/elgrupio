// @ts-nocheck

export default function Dialogs({message, user, date, currentUser}:{message:string, user:string, date:unknown, currentUser:string}) {

  return (
    <>{user === currentUser ?
      <>
        <div className="col-start-1 col-end-2 text-wrap"></div>
        <div className='mt-4 bg-emerald-200 border-2 border-emerald-500 col-start-2 col-end-3 p-2 rounded-md'>
          <p className="text-gray-900">{message}</p>
          <span className="text-gray-400 text-sm text-wrap ">{date}</span>
        </div>
      </>
    :
    <>
    <div className='mt-4 bg-gray-100 border-2 border-pink-500 col-start-1 col-end-2 p-2 rounded-md text-wrap'>
      <p className="text-gray-900">{message}</p>
      <span className="text-gray-400 text-sm">{date}</span>
      <p className="text-gray-400 text-sm max-w-full flex">{user}</p>
    </div>
    <div className="col-start-2 col-end-3"></div>
    </>
    }
    </>
  );
}
