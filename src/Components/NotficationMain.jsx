import { Link } from 'react-router-dom';
import {ReactComponent as Moreicon } from '../assets/More.svg';

function NotificationMain() {
  return (
    <div>
    <div>
        <div className='flex justify-between'>
        <h1 className='text-xl'>Notifications</h1>
        <h1 className='text-lightgray'>Settings</h1>
        </div>
        <hr/>
       <Link to="/spaces"> <div className='flex mt-3 '>
          <div className='w-1/6 mt-2 '>
          <img className='h-14 w-14  rounded-md' src="https://previews.123rf.com/images/topvectors/topvectors1907/topvectors190700803/127135889-%E5%B9%B8%E3%81%9B%E3%81%AA%E8%8B%A5%E3%81%84%E7%94%B7%E6%80%A7%E3%81%A8%E5%A5%B3%E6%80%A7%E3%81%8C%E4%B8%80%E7%B7%92%E3%81%AB%E7%AB%8B%E3%81%A4%E3%80%81%E5%A4%9A%E6%A7%98%E3%81%AA%E5%A4%9A%E6%B0%91%E6%97%8F%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97%E3%80%81%E7%A4%BE%E4%BC%9A%E7%9A%84%E5%A4%9A%E6%A7%98%E6%80%A7%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.jpg" alt=""/>
          </div>
          <div className='w-3/6 flex flex-col'>
            <h3 className='text-lg  text-lightgray'>8m ago</h3>
            <h3 className='text-xl font-semibold'>Join Spaces on qoura</h3></div>
          <div className='w-1/6 mt-4'><Moreicon/></div>
        </div></Link>
        
             <p className='text-xl py-4'>Quora gets better when you follow Spaces.find ones that matches your interests</p>
        <hr/>
    </div>
    </div>
  )
}

export default NotificationMain