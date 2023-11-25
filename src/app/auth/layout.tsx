'use client';
import React,{ PropsWithChildren, useState } from 'react';

// Chakra imports

// Layout components
import { SidebarContext } from 'contexts/SidebarContext';

import { isWindowAvailable } from 'utils/navigation';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';
import Logo from 'components/Logo';
import Image from 'next/image';
// Custom Chakra theme
import phone from '../../../public/img/phone.png'
interface AuthProps extends PropsWithChildren {}
export default function AuthLayout({ children }: AuthProps) {
  // states and functions
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  return (
    <div className="flex h-screen flex-row">
      <Logo />
      <FixedPlugin />
      <header className="h-full w-1/2 bg-primary ">
        <div
          className="gradient1 relative mx-auto mt-20 flex h-3/4 w-3/4 items-center justify-center rounded-full "
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.06) -5.48%, rgba(255, 255, 255, 0.00) 96.9%)',
          }}
        >
          <div
            className="h-3/4 w-3/4 rounded-full"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.15) -25.29%, rgba(255, 255, 255, 0.00) 97.21%)',
            }}
          />
          <div className="absolute top-10 flex flex-row">
            <div className="w-60 self-start pt-16 text-center">
              <h1 className=" mb-5 text-xl font-semibold text-white">
                Fuel Your Restaurant's Success with Perks
              </h1>
              <p className="text-xs text-[#50FFFF]">
                Join Perks to attract more customers, increase customer
                retention, and grow restaurant revenue
              </p>
            </div>
            <Image src={phone} alt="Perks" className="" />
          </div>
        </div>
        <div>
          <h1 className='font-semibold tracking-wide'>A Dashboard Customized Just For You</h1>
          <p></p>
        </div>
      </header>
      <main className="w-1/2 "></main>
    </div>
  );
}
