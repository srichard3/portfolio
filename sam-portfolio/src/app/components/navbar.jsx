'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import NavLink from './navlink'

const links = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/portfolio', title: 'Portfolio' },
  { href: '/contact', title: 'Contact' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* Logo */}
      <div className='md:hidden lg:flex flex w-1/3'>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          {/* <span className='text-white mr-1'>Sam</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
            .dev
          </span> */}
          <Image
            src='/sam-dev-logo.png'
            width={140}
            height={50}
            alt='Sam.dev Logo'
          />
        </Link>
      </div>
      {/* Links */}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        {links.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Socials */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href='https://github.com/srichard3' target='_blank'>
          <Image src='/github.png' width={24} height={24} alt='GitHub' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/samuel-richard3'
          target='_blank'
        >
          <Image src='/linkedin.png' width={24} height={24} alt='LinkedIn' />
        </Link>
        <Link href='https://linktr.ee/samrichard3' target='_blank'>
          <Image src='/soccer-ball.png' width={24} height={24} alt='LinkTree' />
        </Link>
      </div>
      {/* Menu */}
      <div className='md:hidden'>
        {/* Menu Hamburger */}
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
        {/* Menu Items */}
        {menuOpen && (
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
            {links.map(link => (
              <Link href={link.href} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
