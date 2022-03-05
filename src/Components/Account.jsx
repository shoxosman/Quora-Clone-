import { useState } from "react";
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../feature/UserSlice';
import {ReactComponent as Messsegeicon } from '../assets/Messeges.svg';
import {ReactComponent as CreateAdicon } from '../assets/Ad.svg';
import {ReactComponent as Monetizationicon } from '../assets/Monetization.svg';
import {ReactComponent as Contenticon } from '../assets/Content.svg';
import {ReactComponent as Bookmarkicon } from '../assets/Bookmarks.svg';
import {ReactComponent as Drafticon } from '../assets/Draft.svg';
import { useDispatch } from "react-redux";

function Account() {
  const [showAccount, setShowAccount] = useState(false);
  const dispatch = useDispatch();
  const user =useSelector(selectUser)
  const clickHandler = () => {
    setShowAccount(true);
  };
  return (
    <>
      {showAccount && (
        <div
          onClick={() => {
            setShowAccount(false);
          }}
          className="bg-black/0 fixed h-screen w-screen z-20 left-0 top-0"
        ></div>
      )}
      <img onClick={clickHandler} className='lg:h-8 md:h-5  rounded-full lg:w-8 md:w-5 ' src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"} alt=""/>
        {showAccount && (
          <div className="bg-white rounded-xl h-fit w-[270px] fixed shadow-a top-24 z-30 cursor-default ml-1 xl:-ml-6 pb-3">
          
            <div className="p-2 flex items-center border-b border-xlight-gray/70">
              <div className="rounded-full w-12 h-12 overflow-clip">
                <img
                  width="100%"
                  height="100%"
                  src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"}
                  alt=""
                  srcSet=""
                />
              </div>

              <div className="flex flex-col justify-center mx-2 flex-grow">
                <div className="text-base font-bold">
                  <span>{user.displayName?user.displayName:user.email}</span>
                </div>
                
              </div>

              

             
            </div>

            
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <Messsegeicon/> <span>Messages</span>
              </div>
            </div>
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <CreateAdicon/> <span>Create Ad</span>
              </div>
            </div>
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <Monetizationicon/> <span>Monetization</span>
              </div>
            </div>
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <Contenticon/> <span>Your content &stats</span>
              </div>
            </div>
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <Bookmarkicon/> <span>Bookmarks</span>
              </div>
            </div>
            <div className="w-full p-3 hover:bg-midgray cursor-pointer">
              <div className="flex">
              <Drafticon/> <span>Drafts</span>
              </div>
            </div>
            <hr/>
           
            <div className="w-full p-2 hover:bg-midgray cursor-pointer">
              <div>
                <span>Drak mode</span>
              </div>
            </div>
            <div className="w-full p-2 hover:bg-midgray cursor-pointer">
              <div>
                <span>Settings</span>
              </div>
            </div>
            <div className="w-full p-2 hover:bg-midgray cursor-pointer">
              <div>
                <span>Languages</span>
              </div>
            </div>
            <div className="w-full p-2 hover:bg-midgray cursor-pointer">
              <div>
                <span>Help</span>
              </div>
            </div>
            <div  onClick={() => {
                    dispatch(logout());
                  }} className="w-full p-2 hover:bg-midgray cursor-pointer">
              <div>
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}
      
        
      
    </>
  );
}

export default Account;