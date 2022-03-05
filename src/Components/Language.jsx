import React from 'react'
import { useState } from "react";
import {ReactComponent as Languageicon } from '../assets/Language.svg';


function Language() {
    const [showLanguage, setShowLanguage] = useState(false);
    const clickHandler = () => {
      setShowLanguage(true);
    };

  return (
    <>
      {showLanguage && (
        <div
          onClick={() => {
            setShowLanguage(false);
          }}
          className="bg-black/0 fixed h-screen w-screen z-20 left-0 top-0"
        ></div>
      )}
      <Languageicon onClick={clickHandler} className=' h-8 lg:w-8 md:w-5  self-center'/>
        {showLanguage && (
          <div className="bg-white rounded-xl h-fit w-[270px] fixed shadow-a top-24 z-30 cursor-default ml-1 xl:-ml-6 pb-3">
            <div className="p-2  items-center border-b border-xlight-gray/70">
                <div> <h1 className='text-lg pl-2 font-semibold'>Languages</h1></div>
               
                <hr/>
              <div>
              <div className='flex pt-2 mt-2 items-center hover:bg-midgray' >
                  <img 
                  className='h-10 w-10 rounded-full' 
                  src='https://pbs.twimg.com/profile_images/856555012692074499/YEUkmLr7_400x400.jpg' alt=''/>
                  <span className='pl-2'>العربية</span>
             
              </div>
              
              <div className='flex pt-2 mt-2 items-center hover:bg-midgray' >
                  <img 
                  className='h-10 w-10 rounded-full' 
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Status_iucn_EN_icon.svg/1024px-Status_iucn_EN_icon.svg.png' alt=''/>
              <span className='pl-2'>English</span>
              </div>
              </div>
            </div>
            <h5 className='m-2 hover:bg-midgray'>Add language</h5>
            <h5 className='m-2 hover:bg-midgray'>See all Languages</h5>

            
            
        
          </div>
        )}
      
        
      
    </>
  )
}

export default Language