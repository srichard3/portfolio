// 'use client'
// import Brain from '../../components/brain'
// import { motion, useInView, useScroll } from 'framer-motion'
// import Image from 'next/image'
// import { useRef } from 'react'

// const AboutPage = () => {
//   const containerRef = useRef()

//   const { scrollYProgress } = useScroll({ container: containerRef })

//   const skillRef = useRef()
//   const isSkillRefInView = useInView(skillRef, { margin: '-100px' })

//   const experienceRef = useRef()
//   const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

//   return (
//     <motion.div
//       className='h-full'
//       initial={{ y: '-200vh' }}
//       animate={{ y: '0%' }}
//       transition={{ duration: 1 }}
//     >
//       <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
//         {/* Text */}
//         <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
//           {/* Bio */}
//           <div className='flex flex-col gap-12 justify-center'>
//             {/* Portrait */}
//             <Image
//               src='/samuel-portrait.png'
//               alt=''
//               width={112}
//               height={112}
//               className='w-28 h-28 rounded-full object-cover object-top'
//             />
//             {/* Title */}
//             <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
//             {/* Description */}
//             <p className='text-lg'>
//               Every place I go, I have a passion to help others, whether it’s
//               tutoring students after hours, mentoring children in tough
//               situations, or offering a shoulder to a friend in need. My whole
//               life, I have been drawn to technology; to computer science. As I
//               continue my career path, I wish to use technology to inspire, to
//               serve, and to astonish the world.
//             </p>
//             {/* Quote */}
//             <span className='italic'>
//               People don’t buy what you do; they buy why you do it.
//             </span>
//             {/* Signature */}
//             <div className='self-end'>Simon Sinek</div>
//             {/* Scroll Arrow SVG */}
//             <motion.svg
//               initial={{ opacity: 0.2, y: 0 }}
//               animate={{ opacity: 1, y: '10px' }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: 'reverse',
//                 duration: 1.5,
//                 ease: 'easeInOut'
//               }}
//               viewBox='0 0 24 24'
//               fill='none'
//               xmlns='http://www.w3.org/2000/svg'
//               width={50}
//               height={50}
//             >
//               <path
//                 d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
//                 stroke='#000000'
//                 strokeWidth='1'
//               ></path>
//               <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
//               <path
//                 d='M15 11L12 14L9 11'
//                 stroke='#000000'
//                 strokeWidth='1'
//               ></path>
//             </motion.svg>
//           </div>
//           {/* Skills */}
//           <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
//             {/* title */}
//             <motion.h1
//               initial={{ x: '-300px' }}
//               animate={isSkillRefInView ? { x: 0 } : {}}
//               transition={{ delay: 0.2 }}
//               className='font-bold text-2xl'
//             >
//               SKILLS
//             </motion.h1>
//             {/* Lists of Skills */}
//             <motion.div
//               initial={{ x: '-300px' }}
//               animate={isSkillRefInView ? { x: 0 } : {}}
//               className='flex gap-4 flex-wrap'
//             >
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 JavaScript
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 TypeScript
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 React.js
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Next.js
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 HTML
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 CSS
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Tailwind CSS
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 MongoDB
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 PostgreSQL
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Node.js
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Python
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Swift
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Spring Boot
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 SQL
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 C/C++
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Postman
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Framer Motion
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Jira
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 TanStack
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 REST
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Vite
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Docker
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 AWS
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Firebase
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Git
//               </div>
//               <div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
//                 Figma
//               </div>
//             </motion.div>
//             {/* Scroll Arrow SVG */}
//             <motion.svg
//               initial={{ opacity: 0.2, y: 0 }}
//               animate={{ opacity: 1, y: '10px' }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: 'reverse',
//                 duration: 1.5,
//                 ease: 'easeInOut'
//               }}
//               viewBox='0 0 24 24'
//               fill='none'
//               xmlns='http://www.w3.org/2000/svg'
//               width={50}
//               height={50}
//             >
//               <path
//                 d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
//                 stroke='#000000'
//                 strokeWidth='1'
//               ></path>
//               <path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
//               <path
//                 d='M15 11L12 14L9 11'
//                 stroke='#000000'
//                 strokeWidth='1'
//               ></path>
//             </motion.svg>
//           </div>
//           {/* Work Experience */}
//           <div
//             className='flex flex-col gap-12 justify-center pb-48'
//             ref={experienceRef}
//           >
//             {/* Title */}
//             <motion.h1
//               initial={{ x: '-300px' }}
//               animate={isExperienceRefInView ? { x: '0' } : {}}
//               transition={{ delay: 0.2 }}
//               className='font-bold text-2xl'
//             >
//               EXPERIENCE
//             </motion.h1>
//             {/* List Experiences */}
//             <motion.div
//               initial={{ x: '-300px' }}
//               animate={isExperienceRefInView ? { x: '0' } : {}}
//               className=''
//             >
//               {/* Experience #1 */}
//               <div className='flex justify-between h-48'>
//                 {/* Left section */}
//                 <div className='w-1/3'>
//                   {/* Job Title */}
//                   <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
//                     Software Engineer Intern
//                   </div>
//                   {/* Job Description */}
//                   <div className='p-3 text-sm italic'>subtitle text. </div>
//                   {/* Job Date */}
//                   <div className='p-3 text-red-400 text-sm font-semibold'>
//                     June 2024 - Present
//                   </div>
//                   {/* Job Company */}
//                   <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
//                     HYEL, Inc
//                   </div>
//                 </div>
//                 {/* Center section */}
//                 <div className='w-1/6 flex justify-center'>
//                   {/* Line */}
//                   <div className='w-1 h-full bg-gray-600 rounded relative'>
//                     {/* Circle */}
//                     <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
//                   </div>
//                 </div>
//                 {/* Right Section */}
//                 <div className='w-1/3'></div>
//               </div>
//               {/* Experience #2 */}
//               <div className='flex justify-between h-48'>
//                 {/* Left Section */}
//                 <div className='w-1/3 '></div>
//                 {/* Center Section */}
//                 <div className='w-1/6 flex justify-center'>
//                   {/* Line */}
//                   <div className='w-1 h-full bg-gray-600 rounded relative'>
//                     {/* Circle */}
//                     <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
//                   </div>
//                 </div>
//                 {/* Right Section */}
//                 <div className='w-1/3'>
//                   {/* Job Title */}
//                   <div className='bg-white p-3 font-semibold rounded-b-lg rounded-e-lg'>
//                     Software Engineer Intern
//                   </div>
//                   {/* Job Description */}
//                   <div className='p-3 text-sm italic'>subtitle text. </div>
//                   {/* Job Date */}
//                   <div className='p-3 text-red-400 text-sm font-semibold'>
//                     April 2024 - Present{' '}
//                   </div>
//                   {/* Job Company */}
//                   <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
//                     Creative OS
//                   </div>
//                 </div>
//               </div>
//               {/* Experience #3 */}
//               <div className='flex justify-between h-48'>
//                 {/* Left Side */}
//                 <div className='w-1/3'>
//                   {/* Job Title */}
//                   <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
//                     Innovation Project Management Intern{' '}
//                   </div>
//                   {/* Job Description */}
//                   <div className='p-3 text-sm italic'>subtitle text. </div>
//                   {/* Job Date */}
//                   <div className='p-3 text-red-400 text-sm font-semibold'>
//                     June 2023 - Present{' '}
//                   </div>
//                   {/* Job Company */}
//                   <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
//                     Wesco
//                   </div>
//                 </div>
//                 {/* Center Line */}
//                 <div className='w-1/6 flex justify-center'>
//                   {/* Line */}
//                   <div className='w-1 h-full bg-gray-600 rounded relative'>
//                     {/* Circle */}
//                     <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
//                   </div>
//                 </div>
//                 {/* Right Section */}
//                 <div className='w-1/3'></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//         {/* SVG CONTAINER */}
//         <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
//           <Brain scrollYProgress={scrollYProgress} />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default AboutPage

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaSwift,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJira,
  FaFigma
} from 'react-icons/fa'
import {
  SiTypescript,
  SiPostman,
  SiVisualstudiocode,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiJson,
  SiFlask,
  SiXcode,
  SiPowerbi,
  SiNextdotjs,
  SiFramer,
  SiCplusplus
} from 'react-icons/si'
import { PiStackPlusFill, PiStackDuotone, PiGearFill } from 'react-icons/pi'
import { GiPalmTree } from 'react-icons/gi'
import { LuFileJson } from 'react-icons/lu'

const about = {
  title: 'About Me',
  desc: 'Results-driven computer science and business graduate from Loyola Marymount University with a strong background in software development, artificial intelligence, and project management. Known for building products in modern frameworks and languages, mentoring students in AI/ML concepts, and spearheading innovative solutions in high-growth environments. A life-long learner, proactive team-player, and proponent of the growth mindset.',
  info: [
    { fieldName: '/name', value: 'Sam Richard' },
    { fieldName: '/location', value: 'Los Angeles, CA' },
    { fieldName: '/email', value: 's.anthrichard02@gmail.com' }
  ]
}

const experience = {
  title: 'My Experience',
  desc: 'Diverse experience in software engineering and business. I have worked on developing social networking apps, SaaS platforms, and strategic growth initiatives. I have also tutored students in AI/ML concepts.',
  info: [
    {
      company: 'HYEL, Inc',
      position: 'Software Engineer Intern',
      time: 'June 2024 - Present'
    },
    {
      company: 'Creative OS',
      position: 'Software Engineer Intern',
      time: 'April 2024 - June 2024'
    },
    {
      company: 'Wesco',
      position: 'Innovation Project Management Intern',
      time: 'June 2023 - Present'
    },
    {
      company: 'Loyola Marymount University',
      position: 'Artificial Intelligence Teaching Assistant',
      time: 'August 2023 - May 2024'
    },
    {
      company: 'Amptek Growth',
      position: 'Technical Director',
      time: 'October 2020 - January 2022'
    }
  ]
}

const education = {
  title: 'My Education',
  desc: "I hold a Bachelor's degree in Computer Science with a Minor in Business Administration from Loyola Marymount University. My education includes an Entrepreneurship Certificate and strong academic performance.",
  info: [
    {
      institution: 'Loyola Marymount University',
      degree: 'Bachelor of Computer Science',
      date: 'May 2024',
      image: '/lmu-logo.png'
    },
    {
      institution: 'Loyola Marymount University',
      degree: 'Minor of Business Administration',
      date: 'May 2024',
      image: '/lmu-cba-logo.jpg'
    },
    {
      institution: 'Loyola Marymount University',
      degree: 'Entreprenuership Certificate',
      date: 'December 2023',
      image: '/lmu-cba-logo.jpg'
    }
  ]
}

const skills = {
  title: 'My Skills',
  desc: 'I am proficient in various programming languages and developer tools. I have experience with frameworks and libraries like React, Node.js, and Docker, as well as tools for styling and data visualization.',
  languages: [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Swift', icon: <FaSwift /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'C/C++', icon: <SiCplusplus /> },
    { name: 'JSON', icon: <LuFileJson /> }
  ],
  developerTools: [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
    { name: 'Xcode', icon: <SiXcode /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Jira', icon: <FaJira /> },
    { name: 'PowerBI', icon: <SiPowerbi /> }
  ],
  librariesFrameworks: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node', icon: <FaNodeJs /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'PostgresSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Framer Motion', icon: <SiFramer /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'TanStack Router', icon: <GiPalmTree /> },
    { name: 'REST API', icon: <PiGearFill /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Git CI/CD', icon: <FaGitAlt /> },
    { name: 'SpriteKit', icon: <PiStackDuotone /> },
    { name: 'GameplayKit', icon: <PiStackPlusFill /> }
  ]
}

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <motion.div
      initial={{ x: '200vh', opacity: 0 }}
      animate={{
        opacity: 1,
        x: '0%',
        transition: { delay: 0.2, duration: 0.8, ease: 'easeIn' }
      }}
      className='min-h-full items-center justify-center xl:py-0'
    >
      <div className='flex items-top mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-14 py-12'>
        {/* TABS LIST */}
        <div className='flex flex-col items-top justify-center h-full w-1/2 max-w-[380px] mt-4 mx-auto xl:mx-0 gap-8'>
          {/* EXPERIENCE */}
          <button
            onClick={() => setActiveTab('experience')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'experience'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            Experience
          </button>
          {/* SKILLS */}
          <button
            onClick={() => setActiveTab('skills')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform  text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'skills'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            Skills
          </button>
          {/* EDUCATION */}
          <button
            onClick={() => setActiveTab('education')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'education'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            Education
          </button>
          {/* INVOLVEMENTS */}
          <button
            onClick={() => setActiveTab('involvements')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'involvements'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            Involvements
          </button>
          {/* ABOUT */}
          <button
            onClick={() => setActiveTab('about')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'about'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            About
          </button>
        </div>

        {/* TABS CONTENT */}
        <div className='min-h-[70vh] w-full'>
          {/* EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {/* HEADER */}
                <h3 className='text-4xl text-neutral-300 font-bold'>
                  {' '}
                  {experience.title}{' '}
                </h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                  {experience.desc}
                </p>
                {/* EXPERIENCE LIST */}
                <div className='h-[400px]'>
                  <ul className='font-mono grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.info.map((exp, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent text-xs'>{exp.time}</span>
                        <h3 className='text-neutral-200 text-xl max-w-[360px] min-h-[60px] text-center lg:text-left'>
                          {exp.position}
                        </h3>
                        <div className='flex items-center gap-2'>
                          <span className='w-[8px] h-[6px] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-accent'></span>
                          <p className='text-white/60'>{exp.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === 'education' && (
            <div className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {/* HEADER */}
                <h3 className='text-4xl text-neutral-200 font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                  {education.desc}
                </p>
                {/* EDUCATION LIST */}
                <div className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {education.info.map((ed, index) => (
                      <li
                        key={index}
                        className='font-mono cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 bg-neutral-700 h-auto py-6 px-10 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4'
                      >
                        <div className='flex flex-col'>
                          <span className='text-accent text-xs'>{ed.date}</span>
                          <h3 className='text-neutral-200 text-xl max-w-[360px] min-h-[50px]'>
                            {ed.degree}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{ed.institution}</p>
                          </div>
                        </div>
                        <Image
                          src={ed.image}
                          alt=''
                          width={50}
                          height={50}
                          className='w-12 h-12 rounded-full object-cover object-center'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === 'skills' && (
            <div className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  {/* HEADER */}
                  <h3 className='text-4xl font-bold text-neutral-200'>
                    {skills.title}
                  </h3>
                  <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                    {skills.desc}
                  </p>
                </div>
                {/* SKILLS LIST */}
                <div>
                  {/* LANGUAGES */}
                  <h4 className='text-xl text-neutral-700 mb-3'>
                    {'//'} Languages
                  </h4>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                    {skills.languages.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                      >
                        <div className='w-full h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='capitalize text-neutral-300'>
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* LIBRARIES & FRAMEWORKS */}
                  <h4 className='text-xl text-neutral-700 mb-3'>
                    {'//'} Libraries & Frameworks
                  </h4>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                    {skills.librariesFrameworks.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                      >
                        <div className='w-full h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='capitalize text-neutral-300'>
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* DEVELOPER TOOLS */}
                  <h4 className='text-xl text-neutral-700 mb-3'>
                    {'//'} Developer Tools
                  </h4>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                    {skills.developerTools.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                      >
                        <div className='w-full h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='capitalize text-neutral-300'>
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ABOUT */}
          {activeTab === 'about' && (
            <div className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                {/* HEADER */}
                <div className='flex flex-row items-center gap-[30px]'>
                  <Image
                    src='/samuel-portrait.png'
                    alt=''
                    width={112}
                    height={112}
                    className='w-28 h-28 rounded-full object-cover object-top'
                  />
                  <h3 className='text-4xl font-bold text-neutral-300'>
                    {about.title}
                  </h3>
                </div>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                  {about.desc}
                </p>
                {/* INFO LIST */}
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className='flex justify-start items-center gap-4'
                    >
                      <span className='font-mono text-md text-white/60'>
                        {info.fieldName}
                      </span>
                      <span className='font-mono text-md text-accent/75'>
                        {info.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
