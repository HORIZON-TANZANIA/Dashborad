'use client';
import React, { PropsWithChildren, useState } from 'react';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleFill } from 'react-icons/ri';
import Checkbox from 'components/checkbox';
import Input from 'components/ui/Input';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiEyeOff, FiEye } from 'react-icons/fi';

import { MdOutlineEmail } from 'react-icons/md';
import { fakeLoading } from 'utils/libs';
function SignInDefault() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 ">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h3 className="mb-2.5 text-2xl font-semibold text-navy-700 dark:text-white">
          Sign In to your Account
        </h3>
        <p className="mb-5 ml-1 text-sm text-gray-600">
          Welcome back! please enter your detail
        </p>

        {/* Email */}
        <div className="relative my-3">
          <MdOutlineEmail className="absolute left-3 top-[10px] h-7 w-7 text-gray-400" />

          <Input placeholder="Email" variant="search" id="email" type="email" />
        </div>

        {/* Password */}
        <div className="relative my-3">
          <RiLockPasswordLine className="absolute left-3 top-[10px] h-7 w-7 text-gray-400" />
          {showPassword ? (
            <FiEyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[10px] h-7 w-7 cursor-pointer text-gray-400"
            />
          ) : (
            <FiEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[10px] h-7 w-7 cursor-pointer text-gray-400"
            />
          )}

          <Input
            placeholder="Password"
            variant="search"
            id="password"
            type={!showPassword ? 'text' : 'password'}
          />
        </div>
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="mt-2 flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Remember me?
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          onClick={() => {
            fakeLoading('/admin/default', 2000);
          }}
          className="linear my-3 w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
        <div className="my-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
          <p className="w-full text-center text-sm text-gray-600">
            {' '}
            Or sign in with{' '}
          </p>
          <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
        </div>
        <div className="flex flex-row justify-between">
          <div className="mb-6 flex h-[50px] w-48 items-center justify-center gap-2 rounded-xl border-2 border-[#E2E8F0] bg-white hover:cursor-pointer dark:bg-navy-800 dark:text-white">
            <div className="rounded-full text-xl">
              <FcGoogle />
            </div>
            <p className="text-sm font-medium text-navy-700 dark:text-white">
              Google
            </p>
          </div>
          <div className="mb-6 flex  h-[50px] w-48 items-center justify-center gap-2 rounded-xl border-2 border-[#E2E8F0] bg-white hover:cursor-pointer dark:bg-navy-800 dark:text-white">
            <div className="rounded-full text-xl">
              <RiFacebookCircleFill className="text-primary" />
            </div>
            <p className="text-sm font-medium text-navy-700 dark:text-white">
              Facebook
            </p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
            Dont have an account?
          </span>
          <a
            href="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInDefault;
