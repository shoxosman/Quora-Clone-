import React from 'react';
import {ReactComponent as Homeicon } from '../assets/Home.svg';
import {ReactComponent as Followingicon } from '../assets/Following.svg';
import {ReactComponent as Answericon } from '../assets/Answer.svg';
import {ReactComponent as Spacesicon } from '../assets/Spaces.svg';
import {ReactComponent as Notificationsicon } from '../assets/Notifications.svg';
import {ReactComponent as Searchicon } from '../assets/Search.svg';
import {ReactComponent as Languageicon } from '../assets/Language.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/UserSlice';
import Addquestion from './Addquestion';
import JoinQuora from './JoinQuora';
import {  NavLink } from 'react-router-dom';






function Navbar() {
  const user =useSelector(selectUser)
  
  return (
    <div style={{top: 0}}  className='  flex pt-3  w-full fixed flex-row justify-center bg-white pb-2 shadow-gray-300/40'>
      
    
      <div className='mr-10 hover:bg-xlightgray'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/768px-Quora_logo_2015.svg.png" alt='Logo' className='pt-2  lg:w-28'/>
      </div>
      
      <div className='flex flex-row justify-between'>
      <NavLink exact to="/home" style={({ isActive})=>isActive?{fill:"#b92b27"}:{fill:"white",stroke:'#666'}}><div className=' hover:bg-xlightgray  h-14 w-16 flex justify-center'><Homeicon className='sm:h-5 sm:w-5 lg:h-8 lg:w-8 self-center  '/></div></NavLink> 
      <NavLink to="/following" style={({ isActive})=>isActive?{fill:"#b92b27",stroke:"#b92b27"}:{fill:"#666"}}><div className=' hover:bg-xlightgray h-14 w-16 flex justify-center '><Followingicon className='sm:h-5 sm:w-5 lg:h-8 lg:w-8 self-center'/></div></NavLink>
      <NavLink to="/answer" style={({ isActive})=>isActive?{fill:"#b92b27" ,stroke:"#b92b27"}:{fill:"#666"}}><div className=' hover:bg-xlightgray h-14 w-16 flex justify-center '><Answericon className='sm:h-5 sm:w-5 lg:h-8 lg:w-8 self-center'/></div></NavLink>
      <NavLink to='/spaces'style={({ isActive})=>isActive?{fill:"#b92b27" ,stroke:"#b92b27"}:{fill:"#666"}}><div className=' hover:bg-xlightgray h-14 w-16 flex justify-center '><Spacesicon className=' sm:h-5 sm:w-5 lg:h-8 lg:w-8 self-center'/></div> </NavLink>
     <NavLink to="/notifications"style={({ isActive})=>isActive?{fill:"#b92b27" ,stroke:"#b92b27"}:{fill:"#666"}}><div className=' hover:bg-xlightgray h-14 w-16 flex justify-center'><Notificationsicon className=' sm:h-5 sm:w-5 lg:h-8 lg:w-8 self-center'/></div></NavLink> 
      <div className='flex flex-row sm:w-40 lg:w-80 rounded-sm outline outline-1 outline-lightgray h-12 hover:outline-blue-500 '>
        <Searchicon className='self-center pl-2'/>
        <input  type='text' placeholder='Search Quora' className='outline-none h-10 self-center '/>
      </div>
      <div className='h-14 flex'>
      <JoinQuora/>
      </div>
      <div className=' hover:bg-xlightgray h-14 w-12 flex justify-center items-center'>
        
       <img className='h-8 w-8 rounded-full' src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"} alt=""/>
      </div>
      <div  className=' hover:bg-xlightgray h-14 w-12 flex justify-center '><Languageicon className=' h-8 w-8 self-center'/></div> 
      <div className='h-14'>
         <Addquestion/>
         </div>
      </div>
        
    </div>
  )
}

export default Navbar