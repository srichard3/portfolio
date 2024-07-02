'use client'

import { AnimatePresence } from 'framer-motion'
import Navbar from './navbar'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {
  const pathName = usePathname()

  const getBackgroundClass = pathName => {
    switch (pathName) {
      case '/about':
        return 'w-screen h-screen bg-gradient-to-b from-neutral-800 to-black overflow-auto'
      case '/portfolio':
        return 'w-screen h-screen bg-gradient-to-b from-neutral-800 to-black'
      case '/contact':
        return 'w-screen h-screen bg-gradient-to-b from-neutral-800 to-black overflow-auto'
      default:
        return 'w-screen h-screen bg-gradient-to-b from-neutral-200 to-black overflow-auto'
    }
  }

  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className={getBackgroundClass(pathName)}>
        {/* VERTICAL ANIMATION */}
        {/* <motion.div
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName === '/' ? 'home' : pathName.substring(1)}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        /> */}
        {/* HORIZONTAL ANIMATION */}
        <motion.div
          className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-r from-black to-neutral-800'
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        <motion.div
          className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gradient-to-r from-neutral-600 to-neutral-900'
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        />
        <motion.div
          className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gradient-to-r from-neutral-800 to-black'
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        />
        {/* NAVBAR */}
        <div className='h-24'>
          <Navbar />
        </div>
        {/* PAGE CONTENT */}
        <div className='min-h-[calc(100vh-6rem)]'>{children}</div>
        {/* FOOTER */}
        <footer className='text-xs sm:text-sm flex items-center justify-between h-10 text-neutral-600 bg-black'>
          <div className='ml-4 lg:ml-10'>
            @2024 Sam Richard. All rights reserved.
          </div>
          <div className='mr-4 lg:mr-10'>s.anthrichard02@gmail.com</div>
        </footer>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
