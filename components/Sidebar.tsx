'use client';

import Logo from '@/assets/logo.svg';
import links from '@/utils/links';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import JobStack from '@/assets/jobstack-logo.svg';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <div className='hidden lg:flex items-center justify-center gap-4 bg-white rounded-md py-2 border border-slate-200'>
        <JobStack className='size-5 xl:size-9' />
        <div className='text-sm xl:text-[28px] font-bold flex gap-1'>
          <span className='text-black'>Job</span>
          <span className='text-primary'>Stack</span>
        </div>
      </div>

      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathname === link.href ? 'default' : 'link'}
            >
              <Link href={link.href} className='flex items-center gap-x-2 '>
                {link.icon} <span className='capitalize'>{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
