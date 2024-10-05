import React from 'react'
import Link from 'next/link'

const FooterLink = () => {

    const links1 = [
        {
            title: "Learn",
            path: "/"
        },
        {
            title: "Tour",
            path: "/"
        },
        {
            title: "Communities",
            path: "/"
        },
       
    ]
    const links2 = [
        {
            title: "About Us",
            path: "/"
        },
        {
            title: "Contact Us",
            path: "/"
        },
       
       
    ]
    const links3 = [
        {
            title: "Terms of Use",
            path: "/"
        },
        {
            title: "Privacy Policy",
            path: "/"
        },
        
       
    ]




  return (
    <>
    <div className='flex flex-col md:flex-row flex-wrap  mb-8 justify-between  '>
    <div className=''>
        <h2 className='text-[20px] leading-[30px] mb-2 text-white'>Features</h2>

       <ul className=''>
        {links1.map((item, index) => (
            <li key={index} className='mb-2'>
                <Link href={item.path} className='text-[16px] leading-7 text-gray-400'>{item.title}</Link>
            </li>
        ) )

        }
       </ul>

    </div>
    <div className=' '>
        <h2 className='text-[20px] leading-[30px] mb-2 text-white'>Company</h2>

       <ul>
        {links2.map((item, index) => (
            <li key={index} className='mb-2'>
                <Link href={item.path} className='text-[16px] leading-7 text-gray-400'>{item.title}</Link>
            </li>
        ) )

        }
       </ul>

    </div>
    <div className=''>
        <h2 className='text-[20px] leading-[30px] mb-2 text-white'>Legal</h2>

       <ul>
        {links3.map((item, index) => (
            <li key={index} className='mb-2'>
                <Link href={item.path} className='text-[16px] leading-7 text-gray-400'>{item.title}</Link>
            </li>
        ) )

        }
       </ul>

    </div>
    </div>
    </>
  )
}

export default FooterLink