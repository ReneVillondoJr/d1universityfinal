import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  HeartPulse,
  Landmark,
  Palette,
  Scale,
} from 'lucide-react';

const programPillars = [
  {
    icon: Code2,
    number: '01',
    title: 'Technology & Computing',
    description:
      'Build practical foundations for software development, data, digital systems, and emerging technology.',
  },
  {
    icon: BriefcaseBusiness,
    number: '02',
    title: 'Business & Management',
    description:
      'Develop leadership, analytical, financial, and entrepreneurial skills for modern organizations.',
  },
  {
    icon: HeartPulse,
    number: '03',
    title: 'Health & Sciences',
    description:
      'Explore pathways connected to healthcare, scientific research, life sciences, and community wellbeing.',
  },
  {
    icon: Palette,
    number: '04',
    title: 'Arts & Communication',
    description:
      'Develop creative, communication, media, and cultural skills for a changing world.',
  },
  {
    icon: Landmark,
    number: '05',
    title: 'Public Service',
    description:
      'Prepare for meaningful work across public administration, policy, government, and civic institutions.',
  },
  {
    icon: Scale,
    number: '06',
    title: 'Social Sciences & Law',
    description:
      'Study people, institutions, societies, and legal systems through research and critical thinking.',
  },
];

export function ProgramPillars() {
  return (
    <section className='border-b border-border bg-muted/40'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
              Academic pathways
            </p>

            <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl'>
              Find a field worth building your future around.
            </h2>

            <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Start with a broad area of interest, then explore the programs and
              universities that bring it to life.
            </p>
          </div>

          <Link
            href='/programs'
            className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary'
          >
            View all programs
            <ArrowRight className='size-4' />
          </Link>
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {programPillars.map((program) => {
            const Icon = program.icon;

            return (
              <Link
                key={program.title}
                href='/programs'
                className='group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
              >
                <div className='flex items-start justify-between'>
                  <div className='flex size-12 items-center justify-center rounded-xl bg-muted text-primary'>
                    <Icon className='size-5' />
                  </div>

                  <span className='text-xs font-semibold tracking-[0.14em] text-muted-foreground'>
                    {program.number}
                  </span>
                </div>

                <h3 className='mt-7 text-xl font-semibold tracking-tight text-card-foreground'>
                  {program.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                  {program.description}
                </p>

                <div className='mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary'>
                  Explore pathway
                  <ArrowRight className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
