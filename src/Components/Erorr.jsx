import React from 'react'
import { Link } from 'react-router-dom'

function Erorr() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-1/5'>
           <h1 className='text-xl font-semibold'>Page Not Found</h1>
        <p className='text-lightgray text-lg'>We searched everywhere but couldn't find the page you were looking for.</p>  
        <br/>
        <Link to="/home"> <span className=' text-blue-500 mt-5 text-2xl '>Go Back</span></Link>
       <Link to="/home"><span className='text-2xl text-blue-500 p-3 mt-5'>Quora Home</span></Link> 
        </div>
    
    </div>
  )
}

export default Erorr