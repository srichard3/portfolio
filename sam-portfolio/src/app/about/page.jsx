'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

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
    { name: 'Framer', icon: <SiFramer /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'TanStack', icon: <GiPalmTree /> },
    { name: 'REST API', icon: <PiGearFill /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Git CI/CD', icon: <FaGitAlt /> },
    { name: 'SpriteKit', icon: <PiStackDuotone /> },
    { name: 'GameplayKit', icon: <PiStackPlusFill /> }
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
      image: '/education/lmu-logo.png'
    },
    {
      institution: 'Loyola Marymount University',
      degree: 'Minor of Business Administration',
      date: 'May 2024',
      image: '/education/lmu-cba-logo.jpg'
    },
    {
      institution: 'Loyola Marymount University',
      degree: 'Entreprenuership Certificate',
      date: 'December 2023',
      image: '/education/lmu-cba-logo.jpg'
    }
  ]
}

const involvements = {
  title: 'Involvements',
  desc: '',
  involvements: [
    {
      involvement: 'Crimson Circle Service Organization',
      title: 'VP of Spirituality & Social Justice',
      image: ''
    },
    { involvement: 'LMU Roundnet', title: 'President', image: '' },
    { involvement: 'Beta Theta Pi ', title: 'Vice President', image: '' },
    {
      involvement: 'LMU Campus Blood Drive',
      title: 'Head Student Coordinator',
      image: ''
    },
    {
      involvement: 'Grace Hooper STEM Academy',
      title: 'After-School Program Volunteer',
      image: ''
    },
    {
      involvement: 'Special Games',
      title: 'Committee Member/Coach',
      image: ''
    },
    { involvement: 'The Midnight Mission', title: 'Volunteer', image: '' },
    { involvement: 'Share-A-Meal', title: 'Volunteer', image: '' },
    {
      involvement: 'Future Problem Solving Program International',
      title: 'Evaluator/Coach',
      image: ''
    },
    {
      involvement: 'Association for Computing Machinery',
      title: 'Member',
      image: ''
    },
    { involvement: 'Entrepreneurship Society', title: 'Member', image: '' },
    { involvement: 'Weightlifting Club', title: 'Member', image: '' }
  ]
}

const about = {
  title: 'My Bio',
  oneliner: 'Welcome to my website, built with Next.js, Framer, and Tailwind!',
  desc: 'Results-driven computer science and business graduate from Loyola Marymount University with a strong background in software development, artificial intelligence, and project management. Known for building products in modern frameworks and languages, mentoring students in AI/ML concepts, and spearheading innovative solutions in high-growth environments. A life-long learner, proactive team-player, and proponent of the growth mindset.',
  info: [
    { fieldName: '/name', value: 'Sam Richard' },
    { fieldName: '/location', value: 'Los Angeles, CA' },
    { fieldName: '/email', value: 'me@samrichard.dev' },
    { fieldName: '', value: '' },
    { fieldName: '/preferred-dev', value: 'Full-Stack' }
  ]
}

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about')

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
      <div className='flex flex-col sm:flex-row items-top mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-14 py-12'>
        {/* TABS LIST */}
        <div className='flex flex-col items-top justify-center h-full w-1/2 max-w-[380px] mt-4 mx-auto xl:mx-0 gap-4 sm:gap-8'>
          {/* EXPERIENCE */}
          <button
            onClick={() => setActiveTab('experience')}
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-base md:text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
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
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform  text-base md:text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
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
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-base md:text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
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
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-base md:text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
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
            className={`font-mono cursor-pointer transition duration-300 ease-in-out transform text-base md:text-xl h-[64px] rounded-xl justify-center items-center lg:items-start ${
              activeTab === 'about'
                ? 'text-accent bg-neutral-800 hover:scale-95'
                : 'text-neutral-200 bg-none ring-2 ring-neutral-800 hover:scale-105'
            }`}
          >
            Bio
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
                <div className='w-full'>
                  <div className='font-mono flex flex-col w-full gap-8 sm:gap-0'>
                    {experience.info.map((exp, index) =>
                      index % 2 === 0 ? (
                        <div
                          key={index}
                          className='w-full flex flex-row justify-start'
                        >
                          {/* Left Section */}
                          <div className='bg-neutral-700 w-full sm:w-2/5 transition duration-300 ease-in-out transform hover:scale-105 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent text-xs'>
                              {exp.time}
                            </span>
                            <h3 className='text-neutral-200 text-xl max-w-[360px] min-h-[60px] text-center lg:text-left'>
                              {exp.position}
                            </h3>
                            <div className='flex items-center gap-2'>
                              <span className='w-[8px] h-[6px] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-accent'></span>
                              <p className='text-white/60'>{exp.company}</p>
                            </div>
                          </div>
                          {/* Center Section */}
                          <div className='w-1/12 sm:w-1/6 opacity-0 sm:opacity-100 flex justify-center'>
                            {/* Line */}
                            <div className='w-1 h-full bg-accent/60 rounded relative'>
                              {/* Circle */}
                              <div className='absolute w-5 h-5 rounded-full ring-4 ring-accent/40 bg-white -left-2'></div>
                            </div>
                          </div>
                          {/* Right Section */}
                          <div className='w-0 sm:w-2/5'></div>
                        </div>
                      ) : (
                        index % 2 != 0 && (
                          <div
                            key={index}
                            className='w-full flex flex-row justify-start'
                          >
                            {/* Left Section */}
                            <div className='w-0 sm:w-2/5'></div>
                            {/* Center Section */}
                            <div className='w-0 sm:w-1/6 opacity-0 sm:opacity-100 flex justify-center'>
                              {/* Line */}
                              <div className='w-1 h-full bg-accent/60 rounded relative'>
                                {/* Circle */}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-accent/40 bg-white -left-2'></div>
                              </div>
                            </div>
                            {/* Right Section */}
                            <div
                              key={index}
                              className='bg-neutral-700 w-11/12 sm:w-2/5 transition duration-300 ease-in-out transform hover:scale-105 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                            >
                              <span className='text-accent text-xs'>
                                {exp.time}
                              </span>
                              <h3 className='text-neutral-200 text-xl max-w-[360px] min-h-[60px] text-center lg:text-left'>
                                {exp.position}
                              </h3>
                              <div className='flex items-center gap-2'>
                                <span className='w-[8px] h-[6px] rounded-tl-xl rounded-tr-xl rounded-bl-xl bg-accent'></span>
                                <p className='text-white/60'>{exp.company}</p>
                              </div>
                            </div>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
                <div className='h-[30px]'></div>
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
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.languages.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 transition duration-300 ease-in-out transform  w-11/12 xl:h-[184px] py-4 px-10 xl:px-6 xl:py-10 rounded-xl flex flex-col justify-center items-center gap-3 xl:gap-5'
                      >
                        <div className='xl:w-full xl:h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-3xl xl:text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='text-xs xl:text-base capitalize hover:text-accent text-neutral-300'>
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
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.librariesFrameworks.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 transition duration-300 ease-in-out transform w-11/12 xl:h-[184px] py-4 px-10 xl:px-6 xl:py-10 rounded-xl flex flex-col justify-center items-center gap-3 xl:gap-5'
                      >
                        <div className='xl:w-full xl:h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-3xl xl:text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='text-xs xl:text-base capitalize hover:text-accent text-neutral-300'>
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
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.developerTools.map((skill, index) => (
                      <li
                        key={index}
                        className='bg-neutral-700 transition duration-300 ease-in-out transform w-11/12 xl:h-[184px] py-4 px-10 xl:px-6 xl:py-10 rounded-xl flex flex-col justify-center items-center gap-3 xl:gap-5'
                      >
                        <div className='xl:w-full xl:h-[180px] rounded-xl flex justify-center items-center group'>
                          <div className='text-3xl xl:text-7xl text-neutral-300 group-hover:text-accent group-hover:scale-110 transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </div>
                        <div>
                          <p className='text-xs xl:text-base capitalize hover:text-accent text-neutral-300'>
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

          {/* EDUCATION */}
          {activeTab === 'education' && (
            <div className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {/* HEADER */}
                <h3 className='text-4xl text-neutral-200 font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                  {education.desc}
                </p>
                {/* EDUCATION LIST */}
                <div className='h-full'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {education.info.map((ed, index) => (
                      <li
                        key={index}
                        className='font-mono transition duration-300 ease-in-out transform hover:scale-105 bg-neutral-700 h-auto py-6 px-10 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-4'
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
                          className='w-20 h-20 rounded-full object-cover object-center'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* INVOLVEMENTS */}
          {activeTab === 'involvements' && (
            <div className='w-full h-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                {/* HEADER */}
                <h3 className='text-4xl text-neutral-300 font-bold'>
                  {involvements.title}
                </h3>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0'>
                  {involvements.desc}
                </p>
                {/* INVOLVEMENTS LIST */}
                <div className='h-full'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {involvements.involvements.map((involvement, index) => (
                      <li
                        key={index}
                        className='font-mono transition duration-300 ease-in-out transform hover:scale-105 bg-neutral-700 h-auto py-6 px-10 rounded-xl flex flex-col lg:flex-row justify-between items-center'
                      >
                        <div className='flex flex-col gap-3'>
                          <h3 className='text-neutral-200 text-xl max-w-[560px]'>
                            {involvement.involvement}
                          </h3>
                          <p className='text-accent text-xs'>
                            {involvement.title}
                          </p>
                        </div>
                        {involvement.image && (
                          <Image
                            src={involvement.image}
                            alt=''
                            width={50}
                            height={50}
                            className='w-12 h-12 rounded-full object-cover object-center'
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ABOUT */}
          {activeTab === 'about' && (
            <div className='w-full text-center '>
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
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0 xl:text-left'>
                  {about.oneliner}
                </p>
                <p className='max-w-[700px] text-white/60 mx-auto xl:mx-0 xl:text-left'>
                  {about.desc}
                </p>
                {/* INFO LIST */}
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 xl:text-left mt-4'>
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className='flex justify-start items-center gap-4'
                    >
                      <span className='font-mono text-xs sm:text-sm md:text-base text-white/60'>
                        {info.fieldName}
                      </span>
                      <span className='font-mono text-xs sm:text-sm md:text-base text-accent/75'>
                        {info.value}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* SEND BUTTON */}
                <div className='flex w-full items-center justify-center gap-4 mt-16'>
                  <Link
                    href='/portfolio'
                    className='w-1/2 text-sm sm:text-xl ring-1 ring-neutral-500 rounded-lg text-neutral-400 p-4 transition duration-300 ease-in-out transform hover:ring-0 hover:bg-gradient-to-br hover:from-accent/30 hover:to-accent/60 hover:text-black hover:shadow-lg'
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage
