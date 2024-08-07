'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const Homepage = () => {
  const ref = useRef()

  return (
    <motion.div
      className='h-full'
      initial={{ x: '200vh' }}
      animate={{ x: '0%' }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className='h-full relative' ref={ref}>
        {/* HOME HEADER */}
        <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center gap-20'>
          <div className='h-1/2 flex flex-col items-center justify-end'>
            <div className='lg:text-9xl md:text-7xl text-6xl bg-gradient-to-br from-neutral-600 via-black to-neutral-600 bg-clip-text text-transparent'>
              Sam Richard
            </div>
            <span
              className='text-sm lg:text-3xl md:text-lg animate-text-gradient bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500
    bg-[200%_auto] bg-clip-text text-transparent mb-16'
            >
              Software Engineer
            </span>
          </div>
          <Link
            href='/about'
            className='text-xs sm:text-base text-neutral-500 p-4 transition duration-300 ease-in-out transform hover:text-white hover:scale-105'
          >
            Explore
          </Link>
          {/* <motion.svg
            initial={{ opacity: 0.1, y: 0 }}
            animate={{ opacity: 0.4, y: '10px' }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.5,
              ease: 'easeInOut'
            }}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width={50}
            height={50}
          >
            <path
              d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
              stroke='#A3A3A3'
              strokeWidth='1'
            ></path>
            <path d='M12 6V14' stroke='#A3A3A3' strokeWidth='1'></path>
            <path d='M15 11L12 14L9 11' stroke='#A3A3A3' strokeWidth='1'></path>
          </motion.svg>
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-black' />
            <div className='h-screen w-screen flex items-center justify-center bg-black' />
          </motion.div>*/}
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
