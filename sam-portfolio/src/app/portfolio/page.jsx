'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const items = [
  {
    id: 1,
    color: 'from-black to-neutral-700',
    title: 'Gruuper',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/placeholder.jpg',
    link: 'https://samrichard.dev'
  },
  {
    id: 2,
    color: 'from-neutral-700 to-neutral-500',
    title: 'Kazoo Bugaloo',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/placeholder.jpg',
    link: 'https://samrichard.dev'
  },
  {
    id: 3,
    color: 'from-neutral-500 to-neutral-700',
    title: 'TaskManager',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/placeholder.jpg',
    link: 'https://samrichard.dev'
  },
  {
    id: 4,
    color: 'from-neutral-700 to-black',
    title: 'Spotify Music App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/placeholder.jpg',
    link: 'https://samrichard.dev'
  }
]

const PortfolioPage = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div
      className='h-full'
      initial={{ x: '200vh' }}
      animate={{ x: '0%' }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center gap-10'>
          {/* PORTFOLIO HEADER */}
          <span
            className='animate-text-gradient bg-gradient-to-br from-neutral-400 via-neutral-800 to-neutral-400
    bg-[200%_auto] bg-clip-text text-transparent p-4'
          >
            My Works
          </span>
          {/* SCROLL ARROW SVG */}
          <motion.svg
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
        {/* PORTFOLIO ITEMS */}
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            {/* BLANK PAGE */}
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-black' />
            {items.map(item => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8 text-white'>
                  {/* TITLE */}
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>
                    {item.title}
                  </h1>
                  {/* IMAGE */}
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  {/* DESCRIPTION */}
                  <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                    {item.desc}
                  </p>
                  {/* DEMO BUTTON */}
                  <Link href={item.link} className='flex justify-end'>
                    <button className='p-4 text-xs lg:text-2xl md:text-xl md:p-6 md:text-md lg:p-7 lg:text-lg text-white font-semibold m-4 rounded-lg ring-2 ring-white hover:ring-blac hover:bg-white hover:text-neutral-600'>
                      Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            {/* BLANK PAGE */}
            <div className='h-screen w-screen flex items-center justify-center bg-black' />
          </motion.div>
        </div>
      </div>
      {/* OTHER PROJECTS SECTION */}
      <div className='w-screen h-screen flex flex-col gap-14 items-center justify-center text-center bg-gradient-to-b from-black to-neutral-300'>
        {/* HEADER */}
        <h1 className='text-8xl'>Other projects.</h1>
        <div className='relative'>
          {/* SPINNING TEXT */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath
                xlinkHref='#circlePath'
                className='text-xl animate-pulse'
              >
                Full-Stack Software Engineer
              </textPath>
            </text>
          </motion.svg>
          {/* CONTACT BUTTON */}
          <Link
            href='/contact'
            className='text-xs md:text-sm w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
