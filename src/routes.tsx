import React from 'react';
import { AiFillPieChart } from 'react-icons/ai';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';
import { BsFileBarGraphFill } from 'react-icons/bs';


const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <AiFillPieChart className="h-6 w-6" />,
  },
  {
    name: 'Customers',
    layout: '/admin',
    path: 'customers',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Rewards',
    layout: '/admin',
    icon: <BsFileBarGraphFill className="h-6 w-6" />,
    path: 'data-tables',
  },
  {
    name: 'Settings',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Reviews',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
  
];
export default routes;
