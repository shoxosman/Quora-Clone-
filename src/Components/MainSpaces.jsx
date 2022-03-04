import React from 'react'
import { useEffect,useState } from "react";
import {ReactComponent as Createicon } from '../assets/CreateSpaces.svg';
import {ReactComponent as Discovericon } from '../assets/Discover.svg';

function MainSpaces() {
  const [data,setData]= useState([]);
    async function getData(){
        const api  =('https://quora-clone-7607d-default-rtdb.firebaseio.com/Morespaces.json')
        const result =await fetch(api);
        const getResult = await result.json();
        setData(getResult);
       }
       useEffect(() => { 
        getData();
    }, []); 
  return (
    <div className=' p-4 w-4/5'>
    <div className='bg-white p-4 h-32 '>
        <div>
            <h1 className='text-2xl font-bold'>Welcome to Spaces!</h1>
            <div className='flex mt-4'>
            <div className='flex ml-5 flex-row w-3/12 rounded-full p-2 hover:bg-blue-100 outline-blue-700 outline outline-2'>
     <div className=' h-6 w-6 rounded-sm  flex justify-center'>
       
         <Createicon className='self-center stroke-blue-700'/> </div>
      <p className='ml-2 text-blue-700'>Create Space</p>
   </div>

   <div className='flex flex-row ml-5 w-3/12 rounded-full p-2 outline-blue-700 hover:bg-blue-100 outline outline-2 '>
     <div className=' h-6 w-6 rounded-sm  flex justify-center'>
       
         <Discovericon className='self-center stroke-blue-700'/> </div>
      <p className='ml-2 text-blue-700'>Discover Spaces</p>
   </div>

            </div>
            

                
            </div>
        

    </div>
    <div>
      <h1 className='text-3xl font-bold mt-10'>Discover Spaces</h1>
      <h2 className='text-xl mt-10'>Spaces you might like</h2>
    </div>
    <div className='p-4 flex flex-wrap'>
      
      {data && data.map(val => val && <div className='w-1/4 '>
         <div className='w-11/12 h-72 flex flex-col items-center bg-white rounded-md'>
           <img className='h-20 w-full rounded-md' src={val.image} alt={val.name} srcSet="" />
           <h1 className='text-xl font-semibold '>{val.name}</h1>
           <p>{val.text}</p>
         </div>
        </div>
   )}</div>
    
   
    
    </div>
  )
}

export default MainSpaces