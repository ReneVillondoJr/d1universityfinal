import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  School,
} from 'lucide-react';

const universities = [
  {
    name: 'D1 Metropolitan University',
    location: 'Metro Manila',
    type: 'Private University',
    programs: '42 programs',
  },
  {
    name: 'Northbridge State University',
    location: 'Cebu City',
    type: 'Public University',
    programs: '36 programs',
  },
  {
    name: 'Eastbay Institute of Technology',
    location: 'Davao City',
    type: 'Technology Institute',
    programs: '24 programs',
  },
  {
    name: 'Westfield University',
    location: 'Iloilo City',
    type: 'Private University',
    programs: '31 programs',
  },
];

export function UniversityNetwork() {
  return (
    <section className='border-b border-border bg-background'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='overflow-hidden rounded-3xl bg-foreground p-7 text-background sm:p-10 lg:p-14'>
          <div className='grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16'>
            <div>
              <div className='flex size-12 items-center justify-center rounded-xl bg-background/10'>
                <School className='size-5' />
              </div>

              <p className='mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-background/55'>
                University network
              </p>

              <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl'>
                Discover institutions from one connected place.
              </h2>

              <p className='mt-5 max-w-lg text-base leading-7 text-background/65'>
                Explore different academic environments, locations, program
                offerings, and student opportunities before deciding where your
                next chapter begins.
              </p>

              <div className='mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1'>
                {[
                  'University profiles',
                  'Program information',
                  'Campus details',
                  'Student opportunities',
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3 text-sm text-background/75'
                  >
                    <CheckCircle2 className='size-4 text-background/80' />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href='/universities'
                className='mt-9 inline-flex items-center gap-2 text-sm font-semibold text-background'
              >
                Explore universities
                <ArrowRight className='size-4' />
              </Link>
            </div>

            <div className='grid gap-3 sm:grid-cols-2'>
              {universities.map((university) => (
                <Link
                  key={university.name}
                  href='/universities'
                  className='group rounded-2xl border border-background/10 bg-background/[0.05] p-5 transition-colors hover:bg-background/[0.09]'
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex size-10 items-center justify-center rounded-xl bg-background/10'>
                      <Building2 className='size-4' />
                    </div>

                    <ArrowRight className='size-4 text-background/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-background' />
                  </div>

                  <h3 className='mt-6 text-base font-semibold'>
                    {university.name}
                  </h3>

                  <div className='mt-3 space-y-2 text-sm text-background/55'>
                    <p className='flex items-center gap-2'>
                      <MapPin className='size-3.5' />
                      {university.location}
                    </p>

                    <p>{university.type}</p>
                    <p>{university.programs}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
