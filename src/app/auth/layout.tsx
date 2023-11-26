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
          className="gradient1 relative mx-auto mt-20 flex h-3/4 w-3/4 items-center justify-center rounded-[100%] "
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.06) -5.48%, rgba(255, 255, 255, 0.00) 96.9%)',
          }}
        >
          <div
            className="h-3/4 w-3/4 rounded-[100%]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.15) -25.29%, rgba(255, 255, 255, 0.00) 97.21%)',
            }}
          />
          <div className="absolute -right-7 top-16  flex flex-row">
            <div className="w-96 self-start pt-16 text-center">
              <h1 className=" mt-4 text-3xl font-semibold tracking-wide text-white">
                Fuel Your Restaurant's Success with Perks
              </h1>
              <p className=" mx-auto mt-10 w-10/12 tracking-wide text-[#50FFFF]">
                Join Perks to attract more customers, increase customer
                retention, and grow restaurant revenue
              </p>
            </div>
            <Image src={phone} alt="Perks" className="" />
          </div>
        </div>
        <div className='text-center'>
          <h1 className="text-xl font-semibold tracking-wide text-white">
            A Dashboard Customized Just For You
          </h1>
          <p className="text-xs mt-3 text-[#F8FAFC]/50">
            Everything you need in an easily customizable dashboard.
          </p>
        </div>
      </header>
      <main className="w-1/2 ">
        {children}
      </main>
    </div>
  );
}
