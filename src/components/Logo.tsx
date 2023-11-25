import Image from 'next/image'
import React from 'react'
import logo from '../../public/svg/logo.svg'
const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={40}
      height={40}
      className='fixed left-16 top-10'
    
    />
  )
}

export default Logo