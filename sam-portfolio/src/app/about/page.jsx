'use client'
import Brain from '../../components/brain'
import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef()

  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* Text */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* Bio */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* Portrait */}
            <Image
              src='/samuel-portrait.pn g'
              alt=''
              width={112}
              height={112}
              className='w-28 h-28 rounded-full object-cover'
            />
            {/* Title */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/* Description */}
            <p className='text-lg'>
              Every place I go, I have a passion to help others, whether it’s
              tutoring students after hours, mentoring children in tough
              situations, or offering a shoulder to a friend in need. My whole
              life, I have been drawn to technology; to computer science. As I
              continue my career path, I wish to use technology to inspire, to
              serve, and to astonish the world.
            </p>
            {/* Quote */}
            <span className='italic'>
              People don’t buy what you do; they buy why you do it.
            </span>
            {/* Signature */}
            <div className='self-end'>Simon Sinek</div>
            {/* Scroll Arrow SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
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
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* Skills */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* title */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              SKILLS
            </motion.h1>
            {/* Lists of Skills */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                JavaScript
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                TypeScript
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                React.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Next.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                HTML
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                CSS
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Tailwind CSS
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                MongoDB
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                PostgreSQL
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Node.js
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Python
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Swift
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Spring Boot
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                SQL
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                C/C++
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Postman
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Framer Motion
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Jira
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                TanStack
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                REST
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Vite
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Docker
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                AWS
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Firebase
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Git
              </div>
              <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                Figma
              </div>
            </motion.div>
            {/* Scroll Arrow SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
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
                stroke='#000000'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#000000'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
          {/* Work Experience */}
          <div
            className='flex flex-col gap-12 justify-center pb-48'
            ref={experienceRef}
          >
            {/* Title */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >
              EXPERIENCE
            </motion.h1>
            {/* List Experiences */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              className=''
            >
              {/* Experience #1 */}
              <div className='flex justify-between h-48'>
                {/* Left section */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Software Engineer Intern
                  </div>
                  {/* Job Description */}
                  <div className='p-3 text-sm italic'>subtitle text. </div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    June 2024 - Present
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    HYEL, Inc
                  </div>
                </div>
                {/* Center section */}
                <div className='w-1/6 flex justify-center'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right Section */}
                <div className='w-1/3'></div>
              </div>
              {/* Experience #2 */}
              <div className='flex justify-between h-48'>
                {/* Left Section */}
                <div className='w-1/3 '></div>
                {/* Center Section */}
                <div className='w-1/6 flex justify-center'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right Section */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-e-lg'>
                    Software Engineer Intern
                  </div>
                  {/* Job Description */}
                  <div className='p-3 text-sm italic'>subtitle text. </div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    April 2024 - Present{' '}
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Creative OS
                  </div>
                </div>
              </div>
              {/* Experience #3 */}
              <div className='flex justify-between h-48'>
                {/* Left Side */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
                    Innovation Project Management Intern{' '}
                  </div>
                  {/* Job Description */}
                  <div className='p-3 text-sm italic'>subtitle text. </div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>
                    June 2023 - Present{' '}
                  </div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Wesco
                  </div>
                </div>
                {/* Center Line */}
                <div className='w-1/6 flex justify-center'>
                  {/* Line */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* Circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right Section */}
                <div className='w-1/3'></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
