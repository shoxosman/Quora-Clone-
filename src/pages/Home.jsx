import React from 'react';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import SpacesSidebar from '../Components/SpacesSidebar';

function Home() {
  return (
    <div className='flex pt-32 '>
      <div className=' w-1/4 overflow-auto'>
        <Sidebar/>
        </div>
        <div className='w-2/4'>
          <Main/>
        </div>
        <div className='w-1/4'>
          <SpacesSidebar/>
        </div>
      
    </div>
  )
}

export default Home