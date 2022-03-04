import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox';
import Post from './Post'
import db from '../firebase';

function Main() {
  const [data,setData]=useState([])
  useEffect(() => {
    db.collection("Posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
      setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            Posts: doc.data(),
           
          }))
        )
      );
  }, []);

 
  return (
    <div>
      <QuoraBox/>
      {data.map(({ id, Posts }) => (
        <Post
          key={id}
          Id={id}
          post={Posts.addpost}
          timestamp={Posts.timestamp}
          imageUrl={Posts.imageUrl} 
          postusers={Posts.user}
        />
      ))}
    </div>
  )
}

export default Main