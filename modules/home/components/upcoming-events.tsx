import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

const events = [
  {
    month: 'OCT',
    day: '12',
    category: 'Open Day',
    title: 'University Open House',
    university: 'D1 Metropolitan University',
    location: 'Metro Manila',
  },
  {
    month: 'OCT',
    day: '19',
    category: 'Career',
    title: 'Future Careers & Programs Fair',
    university: 'Northbridge State University',
    location: 'Cebu City',
  },
  {
    month: 'NOV',
    day: '04',
    category: 'Admissions',
    title: 'Admissions Information Session',
    university: 'Eastbay Institute of Technology',
    location: 'Davao City',
  },
];

export function UpcomingEvents() {
  return (
    <section className='border-b border-border bg-muted/40'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
              What is happening
            </p>

            <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl'>
              Events that help you take the next step.
            </h2>

            <p className='mt-5 text-base leading-7 text-muted-foreground sm:text-lg'>
              Meet universities, learn about programs, explore opportunities,
              and get closer to the decision that is right for your journey.
            </p>
          </div>

          <Link
            href='/events'
            className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary'
          >
            View all events
            <ArrowRight className='size-4' />
          </Link>
        </div>

        <div className='mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card'>
          {events.map((event) => (
            <Link
              key={`${event.month}-${event.day}-${event.title}`}
              href='/events'
              className='group grid gap-6 p-6 transition-colors hover:bg-muted/40 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7'
            >
              <div className='flex size-16 flex-col items-center justify-center rounded-xl bg-muted text-center'>
                <span className='text-[10px] font-bold tracking-[0.16em] text-primary'>
                  {event.month}
                </span>

                <span className='mt-1 font-heading text-2xl font-bold leading-none text-foreground'>
                  {event.day}
                </span>
              </div>

              <div>
                <span className='inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground'>
                  {event.category}
                </span>

                <h3 className='mt-3 text-lg font-semibold tracking-tight text-foreground'>
                  {event.title}
                </h3>

                <div className='mt-2 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-5'>
                  <span>{event.university}</span>

                  <span className='inline-flex items-center gap-1.5'>
                    <MapPin className='size-3.5' />
                    {event.location}
                  </span>
                </div>
              </div>

              <div className='flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground'>
                <ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5' />
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-5 flex items-center gap-2 text-sm text-muted-foreground'>
          <CalendarDays className='size-4' />
          <span>New university events are added throughout the year.</span>
        </div>
      </div>
    </section>
  );
}
