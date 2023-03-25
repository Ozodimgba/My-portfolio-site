import React from 'react'
import { motion, Reorder, AnimatePresence } from "framer-motion";


import vercel from "../assets/vercel.png"
import redux from "../assets/redux.png"
import tail from "../assets/tail.png"
import next from "../assets/Next.png"
import framer from "../assets/framer.png"
import node from "../assets/node.png"
import postman from "../assets/postman.png"
import prisma from "../assets/prisma.png"
import supabase from "../assets/supabase.png"
import mongo from "../assets/mongodb.png"
import graphql from "../assets/graphql.png"


function Stack() {

  const frntimages = [
    {
      url: vercel
    },
    {
      url: redux
    },
    {
      url: tail
    },
    {
      url: next
    },
    {
      url: framer
    },
  ]

  const bckimages = [
    {
      url: node
    },
    {
      url: postman
    },
    {
      url: prisma
    },
    {
      url: supabase
    },
    {
      url: mongo
    },
    {
      url: graphql
    },
  ]

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 6, bounce: 0, repeat: Infinity },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };

  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center relative'>
        <div className='h-[100%] w-[100%] absolute z-2'>
        <motion.svg
         width="600"
         height="600"
         viewBox="0 0 600 600"
         initial="hidden"
         animate="visible"
         className={`h-[100%] w-[100%] flex justify-center items-center`}
        >
         
        {/* <motion.rect
                width="100%"
                height="140"
                y="38%"
                rx="20"
                stroke="#0099ff"
                stopOpacity={40}
                strokeWidth={3}
                variants={draw}
                custom={3}
        className={`mx-[50%] justify-self-center`}
      />
     */}
        </motion.svg>
        </div>
    
        <div className='h-[100%] w-[100%] absolute z-3 rounded-[2rem] flex justify-center items-center '>
          
        {/* <div className='px-[5%] flex items-center justify-between w-[100%]'>
        {frntimages.map((image) => { return <motion.img src={image.url} className='rounded-[0.3rem] h-[3rem] w-[3rem]' />})}
        </div> */}

        <div className='px-[35%] flex items-stretch justify-between w-[100%] flex-wrap'>
        {bckimages.map((image) => {return <motion.img src={image.url} className='rounded-[0.3rem] my-[10%]' />})}
        </div> 
        </div>

        {/* <div className='h-[100%] w-[100%] absolute z-0 flex justify-center items-center'>
       <h1 className='text-[1.3rem]'>Frontend stack</h1>
       
        </div> */}
        </div>
  )
}

export default Stack