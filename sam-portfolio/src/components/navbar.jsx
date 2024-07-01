'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import NavLink from './navlink'
import { motion } from 'framer-motion'

const links = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/portfolio', title: 'Portfolio' },
  { href: '/contact', title: 'Contact' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' }
  }
  const middleVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  }
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' }
  }

  const listVariants = {
    closed: { x: '100vw' },
    opened: {
      x: 0,
      transition: { staggerChildren: 0.2 }
    }
  }

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LOGO */}
      <div className='md:hidden lg:flex flex w-1/3'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center opacity-50 transition duration-300 ease-in-out transform hover:opacity-100 hover:scale-105'
        >
          <Image
            src='/sam-dev-logo.png'
            width={140}
            height={50}
            alt='Sam.dev Logo'
          />
        </Link>
      </div>
      {/* PAGE LINKS */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        {links.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* SOCIAL LINKS */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href='https://github.com/srichard3' target='_blank'>
          <Image
            src='/github.png'
            width={24}
            height={24}
            alt='GitHub'
            className='opacity-50 transition duration-100 ease-in-out transform hover:opacity-100 hover:scale-110'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/in/samuel-richard3'
          target='_blank'
        >
          <Image
            src='/linkedin-black.png'
            width={24}
            height={24}
            alt='LinkedIn'
            className='opacity-50 transition duration-100 ease-in-out transform  hover:opacity-100 hover:scale-110'
          />
        </Link>
        <Link href='https://linktr.ee/samrichard3' target='_blank'>
          <Image
            src='/linktree.png'
            width={24}
            height={24}
            alt='LinkTree'
            className='opacity-50 transition duration-100 ease-in-out transform  hover:opacity-100 hover:scale-110'
          />
        </Link>
      </div>
      {/* HAMBURGER MENU */}
      <div className='md:hidden'>
        {/* HAMBURGER BUTTON */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={menuOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div
            variants={middleVariants}
            animate={menuOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={menuOpen ? 'opened' : 'closed'}
            className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>
        {/* MENU ITEMS */}
        {menuOpen && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate={menuOpen ? 'opened' : 'closed'}
            className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-95 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
          >
            {links.map(link => (
              <motion.div
                variants={listItemVariants}
                className=''
                key={link.title}
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
