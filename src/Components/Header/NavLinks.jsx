import Link from 'next/link'
import React from 'react'

const NavLinks = () => {

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About Us",
            path: "/about"
        },
        {
            title: "Features",
            path: "/feature"
        },
        {
            title: "Write",
            path: "/write"
        }
    ]



  return (
    <div className='md:w-full md:justify-around md:flex '>
        {links.map((link=> <Link  className='hover:text-green-500 ' href={link.path} key={link.title}>{link.title}</Link>))}
    </div>
  )
}

export default NavLinks