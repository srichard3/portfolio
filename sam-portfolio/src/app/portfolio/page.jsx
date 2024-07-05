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
    desc: 'Student-profile oriented ReactJS app for optimal class project group management for professors, utilizing NodeJS. Machine-Learning group matching model with Flask, and real-time data manipulation using Google Firebase.',
    tech: 'ReactJS | NodeJS | Flask | Google Firebase',
    img: '/main-projects/gruuper-still.png',
    link: 'https://samrichard.dev'
  },
  {
    id: 2,
    color: 'from-neutral-700 to-neutral-700',
    title: 'Kazoo Bugaloo',
    desc: 'Interactive and in-person “guess-the-song” iOS mobile game with a pass-the-phone party element. Developed on Xcode with Swift, integrated with Spotify API for user authentication and playlist personalization.',
    tech: 'Swift | Xcode | Spotify API',
    img: '/main-projects/kazoo-bugaloo-still.png',
    link: 'https://samrichard.dev'
  },
  {
    id: 3,
    color: 'from-neutral-700 to-black',
    title: 'TaskManager',
    desc: 'User-friendly task management software built with TypeScript React and ViteJS, and modern styling with Tailwind. Leveraged TanStack Router for task organization, providing smooth routing and intuitive navigation for end-users.',
    tech: 'TypeScript | React | ViteJS | TailwindCSS',
    img: '/main-projects/task-manager-still.png',
    link: 'https://samrichard.dev'
  }
]

const projects = {
  info: [
    {
      title: 'T.O.A.L.',
      description:
        '(Totally Original and Applicable Language) A fully-equipped homemade programming language, using common English phrased syntax.',
      image: '/other-projects/toal-pic.png'
    },
    {
      title: 'Is It Spam?',
      description:
        'A spam-filter for text messages that trains a model on test data, and can accurately detect unwanted messages.',
      image: '/other-projects/spam-pic.png'
    },
    {
      title: 'AI Ad Agent',
      description:
        'This Advertisement Selection Agent uses a Decision Network to maximize the expected utility of displaying a particular ad to a target audience.',
      image: '/other-projects/ad-agent-pic.png'
    },
    {
      title: 'Blind-Bot Pathfinder',
      description:
        'Using Propositional Logic, Search Paradigms, and Dynamic Learning, Blind-Bot will travel a dangerous Pit-ridden maze in adaptable and optimal ways.',
      image: '/other-projects/pathfinder-pic.png'
    },
    {
      title: 'Distle',
      description:
        'An AI Agent that can predict a word in 10 tries or less using Edit-Distance Principles.',
      image: '/other-projects/distle-pic.png'
    },
    {
      title: 'Huffman Cypher',
      description:
        'An Algorithm that encodes and decodes information using a Huffman Trie.',
      image: '/other-projects/huffman-pic.png'
    },
    {
      title: 'This Website!',
      description:
        'I designed this portfolio website using Next.js, TailwindCSS, and Framer Motion. It is hosted on Vercel.',
      image: '/other-projects/website-pic.png'
    }
  ]
}

const PortfolioPage = () => {
  const ref = useRef()
  const otherProjectsRef = useRef()
  const firstProjectRef = useRef()

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
        <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center'>
          {/* PORTFOLIO HEADER */}
          <div className='w-full h-1/2 flex items-end justify-center'>
            <span
              className='text-4xl sm:text-7xl md:text-8xl animate-text-gradient bg-gradient-to-br from-neutral-300 via-neutral-700 to-neutral-400
    bg-[200%_auto] bg-clip-text text-transparent p-4'
            >
              My Works
            </span>
          </div>
          <div className='w-full h-1/2 flex flex-col items-center justify-end p-20'>
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
              onClick={() => {
                otherProjectsRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ cursor: 'pointer' }}
            >
              <path
                d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                stroke='#FFD700'
                strokeWidth='1'
              ></path>
              <path d='M12 6V14' stroke='#FFD700' strokeWidth='1'></path>
              <path
                d='M15 11L12 14L9 11'
                stroke='#FFD700'
                strokeWidth='1'
              ></path>
            </motion.svg>
          </div>
        </div>
        {/* PORTFOLIO ITEMS */}
        <div className='font-mono sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            {/* BLANK PAGE */}
            <div
              ref={firstProjectRef}
              className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-black to-black'
            >
              {' '}
              {/* <motion.svg
                initial={{ opacity: 0.1, x: 0 }}
                animate={{ opacity: 0.4, x: '10px' }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={2000}
                height={1000}
              >
                <path d='M18 12H6' stroke='#FFD700' strokeWidth='0.5'></path>
                <path
                  d='M15 9L18 12L15 15'
                  stroke='#FFD700'
                  strokeWidth='0.5'
                ></path>
              </motion.svg> */}
            </div>
            {items.map(item => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8 text-white'>
                  {/* IMAGE */}
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                    <Image src={item.img} alt='' fill />
                  </div>
                  {/* TITLE */}
                  <h1 className='text-3xl text-neutral-200 md:text-2xl lg:text-4xl xl:text-6xl'>
                    {item.title}
                  </h1>
                  {/* TECH */}
                  <p className='w-80 text-accent md:w96 lg:w-[500px] text-sm lg:text-lg xl:w-[600px]'>
                    {item.tech}
                  </p>
                  {/* DESCRIPTION */}
                  <p className='w-80 md:w96 lg:w-[500px] text-xs lg:text-lg xl:w-[600px]'>
                    {item.desc}
                  </p>
                  {/* DEMO BUTTON */}
                  {/* <Link href={item.link} className='flex justify-end'>
                    <button className='p-4 text-xs lg:text-2xl md:text-xl md:p-6 md:text-md lg:p-7 lg:text-lg text-white font-semibold m-4 rounded-lg ring-2 ring-white hover:ring-blac hover:bg-white hover:text-neutral-600'>
                      Demo
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
            {/* BLANK PAGE */}
            <div className='h-screen w-screen flex flex-col items-center justify-center bg-black gap-10'>
              <span
                className='text-4xl sm:text-6xl lg:text-8xl animate-text-gradient bg-gradient-to-br from-neutral-800 via-accent to-neutral-800
    bg-[200%_auto] bg-clip-text text-transparent p-4'
              >
                Other Projects
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
                onClick={() => {
                  otherProjectsRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
                style={{ cursor: 'pointer' }}
              >
                <path
                  d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
                  stroke='#FFD700'
                  strokeWidth='1'
                ></path>
                <path d='M12 6V14' stroke='#FFD700' strokeWidth='1'></path>
                <path
                  d='M15 11L12 14L9 11'
                  stroke='#FFD700'
                  strokeWidth='1'
                ></path>
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </div>
      {/* OTHER PROJECTS SECTION */}
      <div className='w-screen flex flex-col gap-14 items-center justify-center text-center bg-gradient-to-b from-black to-neutral-800 overflow-scroll'>
        {/* HEADER */}
        {/* PROJECTS */}
        <div className='flex flex-col gap-[30px]'>
          {/* PROJECTS LIST */}
          <div>
            <ul
              ref={otherProjectsRef}
              className='grid grid-cols-1 md:grid-cols-2 xl:gap-[30px] gap-10 mx-20'
            >
              {projects.info.map((project, index) => (
                <li
                  key={index}
                  className='bg-neutral-700 transition duration-300 ease-in-out transform hover:scale-105 h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-4'
                >
                  {/* IMAGE */}
                  <div className='relative h-[180px] w-full flex  justify-center items-center mb-4'>
                    <Image
                      src={project.image}
                      alt=''
                      layout='fill'
                      objectFit='contain'
                      className='rounded-md'
                    />
                  </div>
                  {/* TITLE */}
                  <div>
                    <p className='text-2xl capitalize text-neutral-300'>
                      {project.title}
                    </p>
                    {/* DESCRIPTION */}
                    <div className='text-sm text-neutral-400 mt-2'>
                      {project.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=''>
          {/* CONTACT BUTTON */}
          <Link
            href='/contact'
            className='text-base md:text-lg w-60 h-16 top-0 left-0 right-0 bottom-0 mb-10 bg-black text-white rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent/60 hover:text-white hover:shadow-lg hover:scale-105'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
