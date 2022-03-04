import React from 'react';
import {Route ,Routes , Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Spaces from '../pages/Spaces';
import Notifications from '../pages/Notifications';
import AnswerPage from '../pages/AnswerPage';
import Erorr from './Erorr';


function PageRouter() {
  return (
    <div>
    <main><Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path="/following" element={<Following/>} />
    <Route path="/spaces" element={<Spaces />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/answer" element={<AnswerPage />} />
    <Route path="/*" element={<Erorr />} />
    
  </Routes></main></div>
  )
}

export default PageRouter