import JobStack from '@/assets/jobstack-logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-col'>
        <div className='flex self-center items-center gap-4'>
          <JobStack className='size-10' />
          <div className='text-[32px] font-bold'>
            Job <span className='text-primary'>Stack</span>
          </div>
        </div>
      </header>
      <section className='max-w-6xl mx-5 lg:mx-auto pt-20 sm:px-8 flex gap-5 justify-center lg:justify-between '>
        <div className='flex flex-col'>
          <p className='leading-loose lg:max-w-4xl'>
            Stay on top of your job search with JobStack! Effortlessly save,
            organize, and track all your job applications in one place. From
            application deadlines to interview schedules, JobStack keeps you
            informed and focused, so you can land your dream job faster.
            Simplify your job hunt today!
          </p>
          <Button asChild className='mt-4 w-full'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <LandingImg className='hidden lg:block w-full max-h-screen object-contain ' />
      </section>
    </main>
  );
}
