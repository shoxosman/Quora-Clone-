import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import Quora from './Components/Quora';
import { login, logout, selectUser } from './feature/UserSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch =useDispatch()
 useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
     if(authUser){
       dispatch(login({
         uid:authUser.uid,
         photo:authUser.photoURL,
         displayName:authUser.displayName,
         email:authUser.email

       }));
       console.log(authUser);
     }else {
       dispatch(logout)
     }
   })
   
 },[dispatch])
  return (
    <div className="App">
      {user?<Quora />:<Login/>}
    </div>
  );
}

export default App;
