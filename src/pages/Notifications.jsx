import React from 'react'
import NotificationMain from '../Components/NotficationMain'
import NotificationSidebar from '../Components/NotificationSidebar'

function Notifications() {
  return (
    <div className='flex pt-32 bg-white '>
      <div className=' w-1/4 overflow-auto'>
        <NotificationSidebar/>
        </div>
        <div className='w-2/4'>
         <NotificationMain/>
        </div>
        <div className='w-1/4'>
         
        </div>
      
    </div>
  )
}

export default Notifications