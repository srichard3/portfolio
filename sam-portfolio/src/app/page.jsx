'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Hero Section */}
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image
            src='/sam-art.png'
            alt='Software Engineer Art'
            fill
            className='object-contain'
          />
        </div>
        {/* Landing Text */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
          {/* Landing Title */}
          <h1 className='text-4xl md:text6xl font-bold'>
            I&apos;m Sam, a Software Engineer
          </h1>
          {/* Landing Description */}
          <p className='md:text-xl'>
            Results-driven computer science and business graduate from Loyola
            Marymount University with a strong background in project management,
            artificial intelligence, and software development. Known for
            spearheading innovative solutions in high-growth environments,
            mentoring students in AI/ML concepts, and fostering strategic
            partnerships across cross-functional teams. A life-long learner,
            proactive team-player, and proponent of the growth mindset.
          </p>
          {/* Action Buttons */}
          <div className='flex gap-4 w-full'>
            {/* Portfolio Button */}
            <button className='bg-black text-white rounded-lg p-4 ring-1 ring-black'>
              View My Work
            </button>
            {/* Contact Button */}
            <button className='rounded-lg p-4 ring-1 ring-black font-semibold'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
