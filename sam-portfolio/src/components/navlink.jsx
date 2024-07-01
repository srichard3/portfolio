'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ link }) => {
  const pathName = usePathname()

  return (
    <Link
      className={`rounded transition duration-100 ease-in-out transform p-1 opacity-50 hover:opacity-100 hover:scale-105 ${
        pathName === link.href
          ? pathName === '/'
            ? 'text-white opacity-100 hover:text-black'
            : 'text-accent/50 opacity-100 hover:text-black'
          : ''
      }`}
      href={link.href}
    >
      {link.title}
    </Link>
  )
}

export default NavLink
