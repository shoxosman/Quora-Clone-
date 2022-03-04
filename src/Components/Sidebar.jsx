import React from 'react';
import { useEffect,useState } from "react";
import {ReactComponent as Discovericon } from '../assets/Discover.svg';

function Sidebar() {
    const [data,setData]= useState([]);
    async function getData(){
        const api  =('https://quora-clone-7607d-default-rtdb.firebaseio.com/Spaces.json')
        const result =await fetch(api);
        const getResult = await result.json();
        setData(getResult);
       }
       useEffect(() => { 
        getData();
    }, []); 
  return (
    <div className=' flex  fixed hover:overflow-auto overflow-hidden h-3/4 overflow-x-hidden flex-col lg:ml-40'>
        <button className=' h-9 sm:w-16 md:w-40 w-52 bg-xlightgray my-3 flex rounded-sm  hover:bg-midgray slef-center'><p className='self-center'>+ Create Space</p></button>
        {data && data.map(val => val && <div className='flex flex-row pb-6 hover:bg-midgray'>
         <img className='w-6 h-6 rounded-sm self-center' src={val.image} alt={val.name} srcSet="" />
         <p className='ml-2 self-center lg:text-lg sm:text-sm'>{val.name}</p>
        </div>
   )}
   <div className='flex flex-row hover:bg-midgray'>
     <div className=' h-6 w-6 rounded-sm bg-midgray flex justify-center'><div className='h-4 w-4 rounded-full outline self-center outline-1 outline-black flex justify-center'><Discovericon className='self-center'/></div> </div>
       
      <p className='ml-2'>Discover Spaces</p>
   </div>
    </div>
  )
}

export default Sidebar