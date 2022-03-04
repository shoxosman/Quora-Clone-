import React from 'react'
import AnswerMain from '../Components/AnswerMain'

function AnswerPage() {
  return (
    <div className='flex pt-32 '>
      <div className=' w-1/4 overflow-auto'>
      <div className=' flex  h-3/4 text-lightgray  flex-col lg:ml-40'>
   
   <h1 className='text-xl text-black'>Questions</h1>
   <hr className='w-5/6'/>
   <div className='flex mt-7 flex-row w-3/4  py-2 font-medium bg-lightred text-red text-lg'>
   Questions for you
   </div>
   <div className='flex flex-row w-3/4 font-medium text-lightgray py-2 hover:bg-midgray text-lg  '>
     Answer Requests
   </div>
   <div className='flex flex-row w-3/4 font-medium text-lightgray py-2 hover:bg-midgray text-lg'>
     Answer Draft
   </div>
   
   </div>
        </div>
        <div className='w-2/4'>
          <AnswerMain/>
        </div>
        <div className='w-1/4'>
          
        </div>
      
    </div>
  )
}

export default AnswerPage