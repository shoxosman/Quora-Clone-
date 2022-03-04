import React from 'react'

function Nonotification() {
  return (
    <div>
        <div className='flex h-screen justify-between'>
        <h1 className='text-xl'>Notifications</h1>
        <h1 className='text-lightgray'>Settings</h1>
        </div>
        <hr/>
        <div className='flex flex-col w-full items-center m-10'>
            <img className='h-32 w-32' src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png" alt=""  />
            <h1 className='text-2xl text-gray-600 font-bold'>No New Notifications</h1>
            <p className='text-xl text-lightgray '>Notifications you received in the last 25 days will show up here.</p>
        </div>
            
            
        
        
        
    </div>
        
    
  )
}

export default Nonotification