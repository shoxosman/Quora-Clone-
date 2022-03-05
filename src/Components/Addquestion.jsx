import React from 'react';
import  { useState } from 'react';
import {ReactComponent as Closeicon } from '../assets/Close.svg';
import {ReactComponent as Questionicon } from '../assets/Question.svg';
import {ReactComponent as Penicon } from '../assets/Pen.svg';
import {ReactComponent as Sidetraingleicon } from '../assets/SideTriangle.svg';
import {ReactComponent as Publicicon } from '../assets/Public.svg';
import {ReactComponent as Everyoneicon } from '../assets/Language.svg';
import {ReactComponent as Imageicon } from '../assets/Image.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/UserSlice';
import Modal from 'react-modal/lib/components/Modal';
import db from "../firebase";
import firebase from 'firebase/compat/app';

function Addquestion() {
  const [show ,setShow]=useState(true)
  const user =useSelector(selectUser)
  const [openModal , setOpenModal] =useState(false)
  const [input , setInput] =useState("")
  const [post ,setPost]=useState("")
  const [inputUrl, setInputUrl] = useState("");
  const handleAddQuestion=(e)=>{
      e.preventDefault()
      setOpenModal(false)
      db.collection('questions').add({
          question: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user:user
      })
      setInput('')
  }
  const handleAddPost=(e)=>{
      e.preventDefault()
      setOpenModal(false)
      db.collection('Posts').add({
          addpost: post,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user:user,
          imageUrl: inputUrl,
      })
      setPost('');
      setInputUrl("");
  }
  return (
    <div><div className='flex items-center'><button onClick={()=>setOpenModal(true)} className='bg-red font-semibold hover:bg-darkred  text-cyan-50 rounded-full lg:text-lg mx-4 md:text-xs sm:text-xs lg:px-6 p-1'>Add question</button></div> 
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
       top: '80px',
       left: '20%',
       right: '20%',
       bottom: '80px',
       border: '1px solid #ccc',
       background: '#fff',
       overflow: 'auto',
       WebkitOverflowScrolling: 'touch',
       borderRadius: '4px',
       outline: 'none',
       padding: '20px'
     }
    
   }}
    >
      <div>
        <Closeicon onClick={() => setOpenModal(false)}/>
        <div className='flex'>
          <div className='flex flex-col w-full'>
          <div onClick={()=>setShow(true)} className='flex py-7 justify-center'><Questionicon/>
          <h4 className={`text-xl ${show?"":"text-lightgray"}`} >Add Question</h4></div>
           <div  className={`h-1 ${show?"bg-blue-500":"bg-lightgray"}`}></div>
           </div>
           <div className='flex flex-col w-full'>
          <div onClick={()=>setShow(false)} className='flex justify-center py-7'><Penicon/>
          <h4 className={`text-xl ${show?"text-lightgray":"text-black"}`} >Create Post</h4></div>
           <div className={`h-1 ${show?"bg-lightgray":"bg-blue-500"}`}></div>
           </div>

        </div>
       {show? <div className='flex flex-col mt-10'>
        <div className='flex justify-center'>
         <div className='bg-blue-100 p-5 rounded-lg w-11/12'>
           <h2 className='text-blue-600 text-xl font-bold'>Tips on getting good answers quickly</h2>
           <ul className='list-disc p-3'>
             <li className='text-blue-500 text-lg '>Make sure your question has not been asked already</li>
             <li className='text-blue-500 text-lg '>Keep your question short and to the point</li>
             <li className='text-blue-500 text-lg '>Double-check grammar and spelling</li>
           </ul>
         </div>
        </div>
        <div className='flex mt-5 ml-8 items-center'>
        <img className='h-6 w-6 rounded-full' src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"} alt=""/>
        <Sidetraingleicon className='pl-1'/>
        <button className='ml-1 flex px-4 py-1 outline outline-1 rounded-2xl text-lg bg-xlightgray  outline-lightgray hover:bg-midgray' ><Publicicon/>Public</button>
        </div>
        <div className='flex justify-center mt-5'>
        <input 
        
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        placeholder='Start your question with "What", "How", "Why", etc.'
        className='w-11/12 focus:outline-none border-b-2 border-lightgray hover:border-blue-500 text-2xl py-3'
        /> 
      
        </div>
        <div className='mt-16 flex border-t-2 justify-end items-center border-lightgray '>
          <button className='mt-2 text-lg text-lightgray p-2 hover:bg-midgray rounded-2xl' onClick={() => setOpenModal(false)}>Cancel</button>
          <button
          type="submit"
          onClick={handleAddQuestion}
          className='mt-2 bg-blue-600 rounded-full px-4 text-white text-lg p-2' >Add question</button>
          
          </div>
        </div>:<div className='flex flex-col mt-10'>
        <div className='flex justify-center'>
        
        </div>
        <div className='flex mt-5 ml-8 items-center'>
        <img className='h-6 w-6 rounded-full' src={user.photo?user.photo:"https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true"} alt=""/>
        <Sidetraingleicon className='pl-1'/>
        <button className='ml-1 flex px-4 py-1 outline outline-1 rounded-2xl text-lg bg-xlightgray  outline-lightgray hover:bg-midgray' ><Everyoneicon/>Everyone</button>
        </div>
        <div className='flex justify-center mt-5'>
        <input 
        
        type='text'
        value={post}
        onChange={(e) => setPost(e.target.value)}
        required
        placeholder='Say something.....'
        className='w-11/12 focus:outline-none text-2xl py-3'
        /> 
      
        </div>
        <div className='mt-52 flex border-t-2 justify-between items-center border-lightgray '>
          <div><Imageicon/><input 
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          type="text" placeholder='Paste URL'/></div>
          <button
          type="submit"
          onClick={handleAddPost}
          className='mt-2 bg-blue-600 rounded-full px-6 text-white text-xl p-2' >Post</button>
          
          </div>
        </div>}
      </div>
      
       

    </Modal></div>
  )
}

export default Addquestion