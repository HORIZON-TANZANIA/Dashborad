import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import toast from 'react-hot-toast';

export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}


export async function fakeLoading(navTo: string, time: number) {

  toast.loading('Loading...', {
    duration: time,
    position: 'top-center',
  });
  await new Promise((resolve) => setTimeout(resolve, time));
  toast.success('Welcome to Perks', {
    position: 'top-center',
    duration: 2000,
  });
  //go to url
  window.location.href = navTo;
  
}
