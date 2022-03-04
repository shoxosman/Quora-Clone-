import React from 'react'
import FollowingMain from '../Components/FollowingMain'
import Sidebar from '../Components/Sidebar'



function Following() {
  return (
    <div className='flex pt-32'>
      <div  className=' w-1/4 overflow-auto' >
        <Sidebar/>
      </div>
      <div className='w-2/4'>
     <FollowingMain/>
      </div>
    

    </div>
  )
}

export default Following