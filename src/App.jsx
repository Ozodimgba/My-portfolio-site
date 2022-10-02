import { useState } from 'react'
import './app.css'
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";

function App() {
 console.log('reload')
 
  return (
    <div className=" bg-black text-white flex flex-col h-[100%] p-[1%]">
    <section>
    <div className='flex flex-row width-[100%] h-[20vh] '>
    <div className='px-[1%] py-[1%] w-[22.5%] text-[0.9rem]'>
    <h2>Ife Asiadiachi</h2>
    </div>
    <div className='px-[1%] py-[1%] w-[22.5%]  text-[0.9rem]'>
    <h2>Lagos, Nigeria</h2>
    <h2>Full Stack Javascript developer</h2>
    <h2>Google cloud engineer(soon)</h2>
    </div>
    <div className='px-[1%] py-[1%] w-[55%] flex flex-row justify-between'>
    <div className='flex flex-row  text-[0.9rem]'>
    <button className='h-[25%] flex items-start'>
    <h2 className='pl-[10px]'>Email</h2>
    <div className='pt-[4%]'>
    <FiArrowUpRight color='#ffffff60'/>
    </div>
    </button>
    <h2 className='pl-[10px]'>Twitter</h2>
    {/*<IoLogoTwitter />*/}
    <h2 className='pl-[10px]'>Instagram</h2>
    </div>
    
    <img src="./me.png" className='h-[40px] rounded-[50%] w-[40px] bg-[#ffffff40] '/>
    
    </div>
    </div>
    </section>

<section>
 <div className='flex flex-row '>
  <div className='h-[80vh] w-[22.5%]'>
    
  </div>
  <div className='h-[80vh] w-[22.5%] flex py-[9%] px-[1%] hover:border-[#1652f0]' >
    <div className='flex flex-col  text-[0.9rem]'>
    <h2>Upwork</h2>
   <h2>Curently freelancing</h2>
   </div>
  </div>
  <div className='h-[80vh] w-[55%] flex py-[9%] justify-start pr-[5%] px-[2%]'>
    <h1 className='text-[2.5rem] leading-[2.5rem]'>Hello - I'm a Nigerian-based Fullstack Javascript developer. 
      I craft exquisite experiences with great people.</h1>
  </div>
  </div>
  </section>

 <section className='px-[2.5%] h-[100vh]'>
  <h1 className='text-[2rem]'>about me</h1>
  <div className='bg-white h-[5px] w-[100%] '></div>
  <div className='h-[80%] mt-[3%] flex flex-row'>
    <div className=' h-[100%] w-[45%]'>
      <img src='./photo.jpg' className='h-[100%]'/>
    </div>
    <div className='text-[1.5rem] w-[55%] pr-[5%]'>
      <h1>Bio</h1>
      <h3 className='text-[0.9rem]'>I am a React developer with 13 months experience.
       Although I have worked with Dart and Flutter in the past, 
      Currently, I'm working a Cloud supply chain startup with a group of guys. 
        So I always needing cash. Hit me up, Ignore whatever price you see, we can negotiate. 
      I like playing video game and binging Netflix.</h3>
      <h1>Education</h1>

      <div className='w-[100%] border-[#ffffff15] border-y-[2px] h-[100px] flex flex-row '>
     <div className='border-[#ffffff15] my-[1.5%] border-r-[2px] h-[80%] w-[25%] flex items-center '>
      <h1 className='text-[1.2rem]'>Codecademy</h1>
     </div>
     <div className='flex items-center pl-[5%]'>
        <h3>Learn Javascript</h3>
      </div>
      </div>
      <h1>Hobbies</h1>
      <button className='bg-white text-black px-[3%] rounded-[4px] w-[33%]'>
        <h3 className='text-[1.3rem]'>View resume</h3></button>
    </div>
  </div>
 </section>

    </div>
    
  )
}

export default App
