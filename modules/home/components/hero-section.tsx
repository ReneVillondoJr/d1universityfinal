import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Search,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const stats = [
  {
    value: '25+',
    label: 'University partners',
  },
  {
    value: '80+',
    label: 'Academic programs',
  },
  {
    value: '15K+',
    label: 'Students reached',
  },
];

export function HeroSection() {
  return (
    <section className='relative overflow-hidden border-b border-border bg-background'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 overflow-hidden'
      >
        <div className='absolute -left-40 -top-40 size-[30rem] rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute -right-40 top-20 size-[28rem] rounded-full bg-primary/5 blur-3xl' />
        <div className='absolute bottom-[-18rem] left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-muted blur-3xl' />
      </div>

      <div className='relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24'>
        <div>
          <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2 text-sm font-medium text-muted-foreground'>
            <Sparkles className='size-4 text-primary' />
            <span>Discover your next academic chapter</span>
          </div>

          <h1 className='max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl'>
            Find the right university for the future you want to build.
          </h1>

          <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl'>
            Explore trusted universities, discover programs that fit your
            interests, and make informed decisions about where your academic
            journey begins.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <Button size='lg' className='h-12 rounded-lg px-6'>
              <Link href='/universities'>
                Explore universities
                <ArrowRight className='size-4' />
              </Link>
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='h-12 rounded-lg px-6'
            >
              <Link href='/programs'>
                <BookOpen className='size-4' />
                Browse programs
              </Link>
            </Button>
          </div>

          <div className='mt-12 grid max-w-2xl grid-cols-3 border-y border-border'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='border-r border-border px-4 py-6 first:pl-0 last:border-r-0'
              >
                <p className='font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
                  {stat.value}
                </p>

                <p className='mt-1 text-xs leading-5 text-muted-foreground sm:text-sm'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <div className='relative overflow-hidden rounded-3xl border border-border bg-muted p-3 shadow-lg'>
            <div className='relative aspect-[0.9] overflow-hidden rounded-2xl bg-secondary'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,255,255,0.95),transparent_23%),linear-gradient(145deg,rgba(196,30,58,0.12),rgba(0,0,0,0.03))]' />

              <div className='absolute left-6 right-6 top-6 rounded-2xl border border-border bg-background/90 p-4 backdrop-blur'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                      University discovery
                    </p>
                    <p className='mt-1 font-semibold text-foreground'>
                      Explore what fits you
                    </p>
                  </div>

                  <div className='flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                    <Search className='size-4' />
                  </div>
                </div>
              </div>

              <div className='absolute inset-x-6 bottom-6'>
                <div className='rounded-2xl border border-border bg-foreground p-5 text-background shadow-lg'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-[0.16em] text-background/50'>
                        Start here
                      </p>

                      <h2 className='mt-2 font-heading text-2xl font-bold leading-tight'>
                        Your next opportunity can start with one decision.
                      </h2>
                    </div>

                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-background/10'>
                      <GraduationCap className='size-5' />
                    </div>
                  </div>

                  <p className='mt-3 text-sm leading-6 text-background/65'>
                    Compare institutions, programs, events, and opportunities
                    through one connected university platform.
                  </p>

                  <div className='mt-5 flex items-center gap-2 text-sm font-semibold'>
                    <span className='size-2 rounded-full bg-primary' />
                    Learn. Choose. Begin.
                  </div>
                </div>
              </div>

              <div className='absolute bottom-32 left-6 hidden items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-sm sm:flex'>
                <span className='size-2 rounded-full bg-success' />
                Explore opportunities
              </div>
            </div>
          </div>

          <div className='absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background p-4 shadow-lg md:block'>
            <div className='flex items-center gap-3'>
              <div className='flex size-10 items-center justify-center rounded-xl bg-muted'>
                <GraduationCap className='size-5 text-primary' />
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>
                  Built for students
                </p>
                <p className='text-sm font-semibold text-foreground'>
                  Make your next step clearer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
