import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className='bg-background'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='relative overflow-hidden rounded-3xl bg-primary px-7 py-12 text-primary-foreground sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary-foreground/10 blur-3xl'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute -bottom-40 left-1/3 size-96 rounded-full bg-primary-foreground/10 blur-3xl'
          />

          <div className='relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end'>
            <div className='max-w-3xl'>
              <div className='flex size-12 items-center justify-center rounded-xl bg-primary-foreground/10'>
                <GraduationCap className='size-5' />
              </div>

              <p className='mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/65'>
                Your next chapter starts here
              </p>

              <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
                Ready to explore what comes next?
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg'>
                Discover universities, explore academic programs, and start
                building a clearer path toward your future.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
              <Button
                size='lg'
                variant='secondary'
                className='h-12 rounded-lg px-6'
              >
                <Link href='/universities'>
                  Explore universities
                  <ArrowRight className='size-4' />
                </Link>
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='h-12 rounded-lg border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'
              >
                <Link href='/register'>Register your interest</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
