import React from 'react'
import MainSpaces from '../Components/MainSpaces'
import { ReactComponent as Emailicon } from '../assets/Email.svg'

function Spaces() {
  return (
    <div className='flex pt-32 '>
      <div className=' w-2/3 overflow-auto flex justify-end'>
        <MainSpaces/>
        </div>
        <div className='w-1/3 mt-5'>
         <div className='bg-white rounded-md w-2/3 h-52 '>
           <h2 className='text-lightgray py-5 px-2 text-xl'>Pending Invites</h2>
           <hr/>
           <div className=' h-1/2 flex flex-col items-center justify-center'>
             <Emailicon/>
             No invites
           </div>

         </div>
        </div>
        
      
    </div>
  )
}

export default Spaces