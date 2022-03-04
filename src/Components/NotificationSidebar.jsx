import React from 'react'

function NotificationSidebar() {
  return (
    <div className=' flex  h-3/4 text-lightgray  flex-col lg:ml-40'>
   
<h1 className='text-xl text-black'>Filters</h1>
<hr className='w-5/6'/>
<div className='flex mt-7 flex-row w-3/4  py-2 bg-lightred text-red text-lg'>
  All Notifications
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg  '>
  Stores
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Questions
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Spaces
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  People Updates
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Comments and Metions
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Upvotes
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Your Content
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Your Profile
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Anouncement
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Eearings
</div>
<div className='flex flex-row w-3/4 text-lightgray py-2 hover:bg-midgray text-lg'>
  Subscriptions
</div>
</div>
  )
}

export default NotificationSidebar