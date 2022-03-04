import React from 'react'
import Question from './Question'
import { useEffect, useState } from 'react'
import db from '../firebase';
import {ReactComponent as Staricon } from '../assets/Star.svg';
function AnswerMain() {
  const [data,setData]=useState([])
  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
      setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
           
          }))
        )
      );
  }, []);

 
  return (
    <div>
       <div className='bg-white mx-10 flex  p-4'>
         <div className='h-8 w-8 rounded-lg flex justify-center items-center bg-red'><Staricon/></div>
         
         <h1 className='text-lightgray pl-2 text-xl'>Questions for you</h1>
       </div>
       <hr className='mx-10 '/>
      {data.map(({ id, questions }) => (
        <Question
          key={id}
          Id={id}
          question={questions.question}
          timestamp={questions.timestamp} 
          questionusers={questions.user}
        />
      ))}
    </div>
  )
}

export default AnswerMain