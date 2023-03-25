import React, {useRef, useEffect, useState} from 'react'
import { motion, useScroll,
    useMotionValueEvent,
    useInView, 
    useAnimationControls,
    delay } from "framer-motion";
import AnimateHeight from 'react-animate-height';


function Lang() {
  const [repo, setRepo] = useState(false);
  const [height, setHeight] = useState(0);
  const [explain, setExplain] = useState()

  const plang =[
    {
      name: "Javascript",
      desc: "Currently my most used programming language powers about 60% of my applications",
      image: "",
      delay: 1,
      color: "[#f8fc14]"
    },
    {
      name: "Typescript",
      image: "",
      delay: 2,
      color: "[#4f9bff]"
    },
    {
      name: "Python",
      image: "",
      delay: 3,
      color: "[#4f9bff]"
    },
    {
      name: "Rust",
      image: "",
      delay: 4,
      color: "[#ffc982]"
    }
  ]
 

   const ref = useRef(null)
   const isInView = useInView(ref)

   
  
  // useEffect(() => {
  //   console.log("Element is in view: ", isInView)
  // }, [isInView])
  const animation = useAnimationControls()
  const langbutton = useAnimationControls()

  const handleLang = () => {
    setHeight(height === 0 ? 'auto' : 0);
    
  }
  
  useEffect(() => {

    
    if(isInView) {
     animation.start({ scale: [20 ,1 ]})
     animation.start({x: [0, -550],
      transition: {
        delay: 0.8,
        velocity: 50
      }
    })
    langbutton.start({y: [50,-10],  opacity: [0, 0.3, 0.8, 1],
      transition:{
       duration: 1,
       delay: 1.5
      }
    })
    }
  console.log('in view ?'+ isInView)

  }, [isInView])
  
 


  return (
    <section className='flex justify-center h-[100%] py-[5%] overflow-hidden'>
   <motion.div
   className='h-[100%] w-[100%] flex flex-col justify-center items-center'

   >
    <motion.h1 className='text-[2rem]' 
    ref={ref}
    animate={animation}
    transition={{ duration: 1 }}
    >My Languages</motion.h1>
    <div className='w-[100%] h-[100%] mt-[3rem] flex justify-start items-stretch '>
      {plang.map((lang) => { return (<>
        <motion.div
       animate={langbutton}
       transition={{duration: 1, }}
       onClick={() => setExplain(lang)}
       className=' h-[100%] w-[100%] flex-wrap justify-center items-center'>
      <button
      onClick={handleLang}
      className=' bg-[#ffffff] h-[2.5rem] w-[9rem] flex justify-center items-center absolute z-10'>
      <h1 className='text-black'>{lang.name}</h1>
      </button>
      <motion.div
    animate={{
      scale: [0.9, 1, 0.9],
      opacity: [1, 0.2, 1],
    }}
    transition={{ duration: 2, repeat: Infinity}}
    className={`bg-yellow-200 w-[10rem] h-[3rem] absolute z-0 `}>   
   </motion.div>
    
      </motion.div>
      
      </>);})}

    </div>

    <AnimateHeight 
    duration={500}
    height={height}
    className={`bg-white w-[100%] mt-[3rem]`}
    >
      <div className='my-[2rem] mx-[1rem]'>
   <h1 className='text-black text-[3rem] '>{explain?.name}</h1>
   <h2 className='text-black text-[1.7rem] '>{explain?.desc}</h2>
   <h1 className='text-black text-[1.5rem] mt-[2rem] text-bold'>{"Javascript projects =>"}</h1>
   <div>
    <div className='h-[15rem] w-[30rem] bg-black '>

    </div>
   </div>
   </div>
</AnimateHeight> 
    
   </motion.div>
    </section>
   
  )
}

export default Lang