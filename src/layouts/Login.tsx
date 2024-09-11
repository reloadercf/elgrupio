import { loginGoogle } from "../lib/auth"

export default function Login() {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-[url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg')] bg-cover">
        <h1 className="mt-3 text-4xl bg-gradient-to-r from-pink-600 to-orange-500 text-transparent bg-clip-text">Somos la mejor red social en el CECYTEH</h1>
        <div className="mt-6 sm:mt-28  pt-2 flex flex-col items-center border w-96 h-72 justify-around bg-slate-100 bg-opacity-90 rounded-xl ">
            <p className="flex flex-col items-center">
                <span className="mt-1 text-2xl bg-gradient-to-r from-pink-600 to-orange-500 text-transparent bg-clip-text">EL GRUPO</span>
                Para entrar al grupo tienes que iniciar sesión </p>
            <button type="button" onClick={async()=>{
              await loginGoogle()
            }} className="text-white w-auto  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
        </div>
    </div>
  )
}
