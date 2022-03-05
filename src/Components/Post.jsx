import React from 'react';
import {ReactComponent as Upvoteicon } from '../assets/Upvote.svg';
import {ReactComponent as Downvoteicon } from '../assets/Downvote.svg';
import {ReactComponent as Shareicon } from '../assets/Share.svg';
import {ReactComponent as Commenticon } from '../assets/Comment.svg';
import {ReactComponent as Moreshareicon } from '../assets/Moreshare.svg';
import {ReactComponent as Moreicon } from '../assets/More.svg';


function Post({id, post, timestamp,imageUrl,postusers}) {

  
  return (
    <div className='flex flex-col  mt-3 mx-10  outline outline-1 rounded-sm outline-xlightgray hover:outline-midgray shadow-lg shadow-gray-300/40 bg-white'>
        <div className='p-4'>
        <div className='flex items-center'>
        <div className='h-10 w-10 bg-slate-400 rounded-full flex justify-center  self-center '>
       <img className='rounded-lg' src={postusers.photo?postusers.photo:'https://st4.depositphotos.com/4329009/19956/v/380/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg?forcejpeg=true'} alt="avatar"/>
      </div>
      <div className='pl-2'>
      <h5 className='ml-1 text-lg hover:underline'>{postusers.displayName?postusers.displayName:postusers.email}</h5>
      <p className='text-sm text-lightgray'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
      </div>
        </div>
        </div>
        <div>
                <p className='lg:text-xl sm:text-base pl-4 font-bold hover:underline my-2'>{post}</p>
        </div>
        <div>
            <img className='w-full max-h-96' src={imageUrl} alt=""  />
        </div>
        <div className='flex justify-between h-16  items-center'>
            <div className='flex '>
             <div className='px-5 hover:bg-xlightgray rounded-full  flex'><Upvoteicon /><h5>1</h5></div> 
             <div className='px-5 hover:bg-xlightgray rounded-full  '><Downvoteicon/></div>
             <div className='px-5 hover:bg-xlightgray rounded-full '><Shareicon/></div>
             <div className='px-5 hover:bg-xlightgray rounded-full '><Commenticon/></div>
            </div>
            <div className='flex '>
            <div className='px-5 hover:bg-xlightgray rounded-full '><Moreshareicon/></div>
            <div className='px-5 hover:bg-xlightgray rounded-full '><Moreicon/></div>
            </div>
        </div>
    </div>
  )
}

export default Post