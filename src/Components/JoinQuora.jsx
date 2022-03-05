import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import  { useState } from 'react';
import {ReactComponent as Closeicon } from '../assets/Close.svg';
import {ReactComponent as Ringicon } from '../assets/Ring.svg';
import {ReactComponent as Lockicon } from '../assets/Lock.svg';
import {ReactComponent as Freeicon } from '../assets/Free.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/UserSlice';


function JoinQuora() {
    const [openModal , setOpenModal] =useState(false)
    const user =useSelector(selectUser)
    const [active ,setActive]=useState(true)
  return (
    <div>
      <div className=' mx-4 self-center '>  <button onClick={()=>setOpenModal(true)} className=' py-1 lg:text-lg outline outline-2 sm:text-xs outline-lightgray rounded-full px-5 bg-xlightgray hover:bg-midgray' >Try Quora+</button></div>
      <div className=' hover:bg-xlightgray h-14 w-12 flex justify-center items-center'></div>
      <Modal
    isOpen={openModal}
    onRequestClose={()=>setOpenModal(false)}
    shouldCloseOnOverlayClick={true}
    ariaHideApp={false}
    style={{
     overlay: {
       position: 'fixed',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       backgroundColor: '#242424e6'
     },
     content: {
       position: 'absolute',
       top: '70px',
       left: '25%',
       right: '25%',
       bottom: '70px',
       background: '#fff',
       overflow: 'auto',
       WebkitOverflowScrolling: 'touch',
       borderRadius: '4px',
       outline: 'none',
      
     }
   }}
    >
      <div className='w-full'>
          <div className=' h-28 bg-lightyellow '>
        <Closeicon onClick={() => setOpenModal(false)}/>
        <div className='flex'>
          <div className='flex flex-col '>
        </div>
         <div className='flex justify-center w-full'>
         <img src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.subscriptions.quora_plus_identity_lightmode.png-26-2802edbeb349c0f5.png" alt='Logo' className=' w-40'/>
          </div> 
          </div>  
       
        
        </div>
        <div className='flex flex-col items-center w-full'>
         <img className='h-20 w-20 rounded-full' src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"} alt=""/>
         <h2 className='text-xl font-bold'>Join Quora+</h2>
         </div>
         <div className='flex justify-evenly mt-5'>
             <div style={{width:"%33"}} className=' p-4  rounded-md outline outline-1 outline-midgray bg-lightyellow h-36'>
               <Ringicon/>
               <h2 className='text-xl  py-2 '>Browse Quora ad‑free</h2>
             </div>
             <div style={{width:"%33"}} className=' p-4 rounded-md outline outline-1 outline-midgray bg-lightyellow h-36'>
               <Lockicon/>
               <h2 className='text-xl py-2'>Unlock millions of answers</h2>
             </div>
             <div style={{width:"%33"}} className=' p-4  rounded-md outline outline-1 outline-midgray bg-lightyellow h-36'>
               <Freeicon/>
               <h2 className='text-xl  py-2'>Try it free for 30 days</h2>
             </div>
             
             
             
         </div>
         <div>
                 <h2 className='m-2 mt-5 text-lg font-medium'>Payment Detail</h2>
                 <div className='flex w-full'>
                 <div className='w-1/2 flex justify-center'>
                     <div onClick={()=>setActive(true)} className='w-11/12' > 
                     <div className={`p-2 outline outline-1 rounded-md ${active?"outline-blue-600 bg-blue-200":"outline-lightgray"} flex`}>
                     <div className={`h-6 w-6 rounded-full ${active?"bg-blue-600":"outline outline-1 outline-lightgray"}`}>
                          </div><div className='p-1'><h1 className='text-lg font-semibold'>Yearly</h1><h1>$4.17/mo</h1></div>
                          </div>
                     </div>
                 </div>
                 <div className='w-1/2 flex justify-center'>
                     <div onClick={()=>setActive(false)} className='w-11/12'  > 
                     <div className={`p-2 outline outline-1 rounded-md ${active?"outline-lightgray":"outline-blue-600 bg-blue-200"} flex`}>
                     <div className={`h-6 w-6 rounded-full ${active?"outline outline-1 outline-lightgray":"bg-blue-600"}`}>
                          </div><div className='p-1'><h1 className='text-lg font-semibold'>Monthly</h1><h1>$4.99/mo</h1></div>
                          </div>
                     </div>
                 </div> 
                 
                 </div>
                 <div className='flex mt-10 w-full h-16 items-center outline outline-1 outline-lightgray hover:outline-blue-600'>
                 <input  className='text-lg w-3/4 h-full outline-none' type="number" placeholder='Card Number'/>
                 <h1>MM /YY CVC</h1>
                 </div>
                 <p className='text-lg text-lightgray'>Existing subscriptions will also be charged to this card. You may receive a charge from our third party payments processor as a temporary authorization to validate your credit or debit card. Learn more.
</p>
             </div>
             <div className='flex flex-col items-center text-lightgray '>
                <p>By clicking "Join Quora+", you agree to Quora's Subscriber Terms of Service.</p>
                <button className='w-full h-12 rounded-full text-lg text-white bg-blue-600'>Join Quora +</button>
             </div>
      </div>
      
       

    </Modal>
    </div>
  )
}

export default JoinQuora