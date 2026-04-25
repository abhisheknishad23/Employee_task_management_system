import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-[Poppins]">
      <div className="relative w-[400px] h-[200px] rounded-2xl animate-spin-slow bg-[conic-gradient(at_center,var(--tw-gradient-stops))] from-[#ff2770] via-transparent to-[#ff2770] shadow-[0_15px_50px_black] hover:w-[450px] hover:h-[500px] transition-all duration-500 group overflow-hidden">
        {/* Animated Overlay Gradient */}
        <div className="absolute inset-0 z-0 animate-spin-reverse-slower rounded-2xl bg-[conic-gradient(at_center,var(--tw-gradient-stops))] from-[#45f3ff] via-transparent to-[#45f3ff] opacity-70" />

        {/* Inner Box */}
        <div className="absolute inset-1 z-10 bg-[#2d2d9] border-[3px] border-pink-500 rounded-[15px]" />

        {/* Login Form */}
        <div className="absolute z-20 inset-[60px] group-hover:inset-[40px] transition-all duration-500 bg-green-00/20 shadow-inner shadow-green-400/90 rounded-xl flex flex-col items-center justify-center text-white backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center gap-5 w-[70%] transition-transform duration-500 group-hover:translate-y-0 translate-y-40">
            <h2 className="text-xl font-semibold tracking-widest uppercase">
              <i className="text-[#ff2770] drop-shadow-[0_0_2px_#ff2770]">Login</i>
            </h2>
            <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full">
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-2 rounded-full bg-black/10 border-2 border-white text-white placeholder:text-white outline-none"
              />
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-5 py-2 rounded-full bg-black/10 border-2 border-white text-white placeholder:text-white outline-none"
              />
              <input
                type="submit"
                value="Log In"
                className="cursor-pointer px-5 py-2 rounded-full bg-[#45f3ff] text-[#111] font-semibold hover:shadow-[0_0_10px_#45f3ff,0_0_60px_#45f3ff] transition-all duration-300"
              />
            </form>
            {/* <div className="flex justify-between w-full text-sm">
              <a href="#" className="text-white hover:underline">Forgot Password?</a>
              <a href="#" className="text-[#ff2770] font-semibold hover:underline">Sign Up</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



























// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const submitHandler= (e)=>{
//     e.preventDefault()
//     handleLogin(email,password)
    
//     setEmail("")
//     setPassword("")
//   }
//   return (
//     <div className='flex h-screen  items-center justify-center'>
//         <div className='border-2 border-xl border-blue-500 p-20'>
//             <form onSubmit={(e)=>{
//               submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'>
//                 <input 
//                 value={email}
//                 onChange={(e)=>{setEmail(e.target.value)}} 
//                 required className='text-white border-2 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white ' type='email' placeholder='Enter your email'></input>
                
//                 <input 
//                 value={password}
//                 onChange={(e)=>{setPassword(e.target.value)}}
//                 required className='text-white border-2 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-4' type='password' placeholder='Enter Password'></input>
//                 <button className='text-white border-2 outline-none bg-blue-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-4'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login