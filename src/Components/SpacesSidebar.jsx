import React from 'react';
import { useEffect,useState } from "react";
import {ReactComponent as Squareicon } from '../assets/Square.svg';
import {ReactComponent as Arrowicon } from '../assets/Arrow.svg';

function SpacesSidebar() {
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
          <div className='bg-white w-64 my-6'>
          <div className='p-2 flex outline outline-1 outline-midgray'>
                  
                  <h1 className='text-lg'>Set Up Your Account</h1>
              </div>

              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
                  <Arrowicon/>
                  <p className='pl-2'>Visit your feed</p>
              </div>
              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
              <div><Squareicon/></div>
                  <p className='pl-2'>Follow 4 more Spaces</p>
              </div>
              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
                 <div><Squareicon/></div> 
                  <p className='pl-2'>Upvote 5 more good pieces of content</p>
              </div>
              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
              <div><Squareicon/></div>
                  <p className='pl-2'>Ask a question</p>
              </div>
              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
              <div><Squareicon/></div>
                  <p className='pl-2'>Add 3 credentials about where you live, work or study</p>
              </div>
              <div className='p-3 flex outline outline-1 outline-midgray hover:bg-midgray'>
              <div><Squareicon/></div>
                  <p className='pl-2'>Answer a question</p>
              </div>
        

          </div>
    <div className='bg-white w-64 mt-2'>
        <div className='p-2 outline outline-1 outline-midgray'>
         <h1 className='text-lg'>Spaces to follow</h1>
         </div>
       
        {data && data.map(val => val && <div className='flex flex-col p-1 outline outline-1 outline-midgray hover:bg-midgray'>
            <div className='flex '>
          <img className='w-8 h-8 rounded-lg self-center' src={val.image} alt='' srcSet="" />
         <p className='ml-2 self-center'>{val.name}</p>
         </div>
         <p className='text-lightgray'>{val.text}</p>
         
        </div>
        
   )}
    </div>
    </div>
  )

}

export default SpacesSidebar