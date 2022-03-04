import React from 'react'
import {ReactComponent as Passicon } from '../assets/Pass.svg';
import {ReactComponent as Downvoteicon } from '../assets/Downvote.svg';
import {ReactComponent as Moreshareicon } from '../assets/Moreshare.svg';
import {ReactComponent as Moreicon } from '../assets/More.svg';
import {ReactComponent as Followicon } from '../assets/Follow.svg';
import {ReactComponent as Answericon } from '../assets/Answer.svg';



function Question({id, question, timestamp, questionusers}) {
  return (
    <div className='flex flex-col px-4   mx-10  outline outline-1 rounded-sm outline-xlightgray hover:outline-midgray shadow-lg shadow-gray-300/40 bg-white'>
    <div className='p-4'>
    <div className='flex items-center'>
    
  <div className='pl-2'>
      <div>
            <p className='text-xl  font-bold hover:underline my-2'>{question}</p>
    </div>
  <h5 className='ml-1 text-lg hover:underline'>Asked by {questionusers.displayName?questionusers.displayName:questionusers.email}</h5>
  <p className='text-sm text-lightgray'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
  </div>
    </div>
    </div>
    
    <div className='flex justify-between h-16  items-center'>
        <div className='flex '>
         <div className='px-5 hover:bg-xlightgray rounded-full  flex'><Answericon className='h-6 w-6 stroke-blue-500' /> <span>Answer</span></div> 
         
         <div className='px-5 hover:bg-xlightgray rounded-full flex '><Followicon className='h-7 w-7'/><span>Follow</span></div>
         <div className='px-5 hover:bg-xlightgray rounded-full flex '><Passicon className='h-7 w-7'/><span>Pass</span></div>
        </div>
        <div className='flex '>
            
        <div className='px-5 hover:bg-xlightgray rounded-full  '><Downvoteicon/></div>
        <div className='px-5 hover:bg-xlightgray rounded-full '><Moreshareicon/></div>
        <div className='px-5 hover:bg-xlightgray rounded-full '><Moreicon/></div>
        </div>
    </div>
    <hr />
</div>
  )
}

export default Question