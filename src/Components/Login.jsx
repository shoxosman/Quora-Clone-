import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {auth , provider ,facebookprovider} from "../firebase"


function Login() {
    const today = new Date();
    const [email ,setEmail] =useState("");
    const [password , setPassword] =useState("")
    const handlelogin =(event)=>{
      event.preventDefault()
          auth.signInWithEmailAndPassword(email ,password).then((auth)=>{
            console.log(auth);
          }).catch((e)=>alert(e.message))
          setPassword('')
        setEmail('')
    }
    const Handleregister= (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
          if (auth) {
            console.log(auth);
          }
        }).catch((e) => alert(e.message));
        setPassword('')
        setEmail('')
    };
    
    
    const Signin=()=>{
      auth.signInWithPopup(provider).catch((e)=>alert(e.message))
      console.log(auth);
    }
    const SigninFacebook=()=>{
      auth.signInWithPopup(facebookprovider).catch((e)=>alert(e.message))
      console.log(auth);
    }
    
  return (
    <div className='h-screen w-full flex justify-center items-center login'>       
      <div className="flex flex-col w-3/5 bg-white rounded-sm mt-32 mb-32">
        <div className='p-10'>
        <div className="flex justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png" alt='Logo' className='h- w-1/4 py-2'/>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className='text-lightgray text-lg font-medium'>A Place to Share knowledge and better understand the world</p>
        </div>
        <div className="flex mt-14">
          <div className="flex flex-col w-1/2 items-center  ">
            <div onClick={Signin} className="flex items-center p-2 my-2  outline outline-1 outline-lightgray w-4/5 rounded-sm hover:bg-xlightgray">
              <img
                className="h-8 w-8"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
             <p>Continue With Google</p> 
            </div>
            <div onClick={SigninFacebook} className="flex items-center py-2  my-2 outline outline-1 outline-lightgray w-4/5 rounded-sm hover:bg-xlightgray">
              <img
                className="h-8 w-8"
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                alt=""
              />
              <span>Continue With Facebook</span>
            </div>
            <div className='flex items-center p-2 my-2  w-4/5 rounded-lg justify-center hover:bg-xlightgray'>
            <h4> Sign Up With Email</h4></div>
            <div className="flex items-center p-7">
                
              <p className='text-lightgray text-sm'>
                
                By continuing you indicate that you have read and agree to
                Quora's
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms of Service
                </span>
                and
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
          
          <div className=" flex flex-col w-1/2">
            <div className="">
              <h2 className='font-semibold text-lg mb-1'>Login </h2>
              <hr className='w-4/5  '/>
            </div>
            <div className="flex flex-col">
              <div className="py-5">
                  <h2 className='font-semibold text-lg'>Email</h2>
                <input
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                className='py-2 text-lg w-4/5 outline outline-1 outline-lightgray hover:outline-blue-600'
                  type="text"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="flex flex-col">
              <h2 className='font-semibold text-lg'>Password</h2>
                <input
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                className='py-2 w-4/5 outline outline-1 text-lg outline-lightgray hover:outline-blue-600'
                  type="password"
                  placeholder="Your Password"
                />
              </div>
            </div>
            <div className="flex my-4 w-4/5 items-center justify-between">
              <p className='text-lightgray'> Forgot Password?</p>
              <Link to="/"><button 
              type='submit'
              onClick={handlelogin}
              className='bg-blue-600 text-white text-lg py-2 px-5  rounded-full hover:bg-blue-700' >Login </button></Link>
              <button 
              type='submit'
              onClick={Handleregister}
              className='bg-blue-600 text-white text-lg py-2 px-5  rounded-full hover:bg-blue-700' >Register</button>
            </div>
          </div>
        </div>
        </div>
        <div className="flex justify-around items-center w-full h-20 bg-xlightgray">
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>About</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Languages</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Careers</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Businesses</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Privacy</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Terms</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>Contact</p>
          <p style={{  cursor: "pointer" }} className='text-gray-600 hover:underline'>&copy; Quora Fake Inc. {today.getFullYear()}</p>
        </div>
      </div>
        
    </div>
  )
}

export default Login

