import { useState } from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion';
import './app.css'
import { FiArrowUpRight } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';
import CertCards from './components/certCards';
import StackTab from './components/stackTab';
import Stack from './components/Stack';
import Lang from './components/Lang';

function App() {
  const [color, setColor] = useState("#000000")
  const [loading, setLoading] = useState()
  console.log(color)
 
  return (
    <div className={`bg-black text-white flex flex-col h-[100%] p-[1%]`}>
       <motion.div 
      initial={{opacity: 1}}
      animate={{opacity: 0}}
      transition={{type: easeInOut, delay: 3.5, duration: 0.8 }}
      className='h-[100vh] w-[100%] flex justify-center items-center text-[5rem] '>
        <div className='overflow-hidden grid grid-cols-3 h-[6rem] p-0 text-row'>
       <motion.h1
       initial={{y: 30}}
       animate={{y: 0}}
       transition={{type: easeInOut, delay: 0, duration: 0.5 }}
       className=" "
       >A</motion.h1>
       <motion.h1
       initial={{y: 30}}
       animate={{y: 0}}
       transition={{type: easeInOut, delay: 0.5, duration: 0.6 }}
       className=" ml-[0.4rem] "
       >9</motion.h1>
       <motion.h1
       initial={{y: 30}}
       animate={{y: 0}}
       transition={{type: easeInOut, delay: 1, duration: 0.5 }}
       className=" "
       >d</motion.h1>
       </div>
      </motion.div> 
      <div className='h-[100%] w-[100%]'>
    <section className=''>
    <div className='flex flex-row width-[100%] h-[20vh]'>
    <div className='px-[1%] py-[1%] w-[22.5%] text-[0.9rem]'>
    <h2>Ife Asiadiachi</h2>
    </div>
    <div className='px-[1%] py-[1%] w-[22.5%]  text-[0.9rem]'>
    <h2>Lagos, Nigeria</h2>
    <h2>Full Stack Javascript developer</h2>
    <h2>Solana blockchain developer</h2>
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
    <h2 className='pl-[10px]'>Github</h2>
    <h2 className='pl-[10px]'>Medium</h2>
    </div>
    
    <img src="./me.png" className='h-[40px] flex rounded-[50%] w-[40px] bg-[#ffffff40] '/>
    
    </div>
    </div>
    </section>

<section>
 <div className='flex flex-row '>
  <div className='h-[80vh] w-[22.5%]'>
    
  </div>
  <div className='h-[100%] w-[22.5%] flex py-[9%] px-[1%] hover:border-[#1652f0]' >
    <div className='flex flex-col text-[0.9rem]'>
    <h2>Upwork</h2>
   <h2>Curently freelancing</h2>
   </div>
  </div>
  <div className='h-[100%] w-[55%] flex pt-[9%] justify-start pr-[5%] px-[2%]'>
    <h1 className='text-[2.5rem] leading-[2.5rem]'>Hello - I'm a Nigerian-based Fullstack Javascript developer. 
      I craft exquisite experiences with great people.</h1>
  </div>
  </div>
  <div className='w-[100%] h-[100%] flex flex-row justify-center items-center'>
    <motion.div
     initial={{ translateY: 0 }}
     animate={{
      translateY: [0, 30, 0]
    }}
    transition={{ ease: easeInOut, bounce: 0.25, type: 'spring', duration: 3, repeat: Infinity, repeatType: "loop",}}
    className='bg-white h-[50px] w-[50px] rounded-[50%] flex justify-center items-center'>
    <HiOutlineArrowDown color='black' size={30}/>
    </motion.div>
  </div>
  {/* <CertCards /> */}
  </section>
  <section>
    {/* <Lang /> */}
    <div className='w-[100%] flex justify-center'>
    <TypeAnimation
      sequence={[
        'Wait', // Types 'One'
        1000, // Waits 1s
        'What about my stack', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        '???',
        2000,
        'Chill a bit           ',
        
         // Types 'Three' without deleting 'Two'
    
      ]}
      wrapper="h1"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4em' }}
    />
    </div>
    <Stack />
  </section>
 {/* <section className='h-[100%]'>
 <h4 className='text-[14rem] text-center'> Asiadiachi Ife Dayspring</h4>
 </section>
 <section className='px-[2.5%] h-[100vh]'>
  <h1 className='text-[2rem]'>about me</h1>
  <div className='bg-white h-[5px] w-[100%] '></div>
  <div className='h-[80%] mt-[3%] flex flex-row'>
    <div className=' h-[100%] w-[45%]'>
      <img src='./photo.jpg' className='h-[100%] flex -rotate-[17deg]'/>
    </div>
    <div className='text-[1.5rem] w-[55%] pr-[5%]'>
      <h1>Bio</h1>
      <h3 className='text-[0.9rem]'>I am a React developer with 13 months experience.
       Although I have worked with Dart and Flutter in the past, 
      Currently, I'm working a Cloud supply chain startup with a group of guys. 
        So I always needing cash. Hit me up, Ignore whatever price you see, we can negotiate. 
      I like playing video game and binging Netflix.</h3>
      <button className=' text-white px-[3%] rounded-[4px] w-[33%]'>
        <h3 className='text-[1.3rem]'>View resume</h3></button>
    </div>
  </div>
 </section> */}
 {/* <section className='px-[2.5%] h-[50vh] flex items-center'>
 <CertCards />
 </section>
 <section className='px-[2.5%] h-[100vh] flex justify-center'>
  <div className='bg-white flex justify-center rounded-[50%] items-center h-[600px] w-[600px]'>
 <h1 className='text-black text-[3rem]'>What do I do?</h1>
 </div>
 </section>
 <section className='h-[100vh]'>
 </section> */}
 </div>
    </div>
    
  )
}

export default App
