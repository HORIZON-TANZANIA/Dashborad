import Image from 'next/image'
import React, { FC } from 'react'
import logo from '../../public/svg/logo.svg'
import logoBlue from '../../public/svg/logoBlue.svg'
const Logo:FC<{isBlue?:boolean}> = ({isBlue}) => {
  return (
    <Image
      src={isBlue?logoBlue:logo}
      alt="Logo"
      width={40}
      height={40}
      className='fixed left-16 top-10 z-20'
    
    />
  )
}

export default Logo