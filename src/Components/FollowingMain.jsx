import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";
function FollowingMain() {
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
    <div>
        <div className='flex flex-col w-full items-center m-10'>
            <img className='h-32 w-32' src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.all_caught_up_feed_lightmode.png-26-1b95f406729630f5.png" alt=""  />
            <h1 className='text-2xl text-gray-600 font-bold'>You're all caught up</h1>
            <p className='text-xl text-lightgray '>Follow more Spaces to discover new stories in your feed. You can also visit</p>
            <Link to="/home"><h2 className='text-xl text-blue-600'>Home.</h2></Link>
        </div>
        <div>
        <div className='bg-white w-full mt-2'>
        <div className='p-2 outline outline-1 outline-midgray'>
         <h3 className='text-3xl py-7 font-bold'>Discover Spaces</h3>
         <h2 className='text-xl px-5'>Spaces you might like</h2>
         </div>
       
        {data && data.map(val => val && <div className='flex  p-1 outline outline-1 outline-midgray hover:bg-midgray'>
            <div className=' flex p-4'>
          <img className='w-12 h-12  rounded-xl self-start' src={val.image} alt='' srcSet="" />
         
         </div>
         <div className='slef-center'>
         <p className='text-xl'>{val.name}</p>
         <p className=' text-lightgray'>41.8 followers</p>
         <p className=''>{val.text}</p>
         </div>
        </div>
        
   )}
    </div>
        </div>
    </div>
  )
}

export default FollowingMain