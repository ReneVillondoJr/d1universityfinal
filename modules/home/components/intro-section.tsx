import { Compass, Lightbulb, UsersRound } from 'lucide-react';

const principles = [
  {
    icon: Compass,
    title: 'Explore with clarity',
    description:
      'Understand universities, programs, and opportunities without having to search through disconnected information.',
  },
  {
    icon: Lightbulb,
    title: 'Choose with confidence',
    description:
      'Discover academic pathways that align with your interests, goals, and plans for the future.',
  },
  {
    icon: UsersRound,
    title: 'Move forward together',
    description:
      'Connect students with institutions and experiences that help turn academic plans into real opportunities.',
  },
];

export function IntroSection() {
  return (
    <section className='border-b border-border bg-background'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
              A connected university experience
            </p>

            <h2 className='mt-4 max-w-xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl'>
              More than a university directory.
            </h2>
          </div>

          <div>
            <p className='max-w-3xl text-lg leading-8 text-muted-foreground'>
              Choosing where to study is one of the most important decisions in
              your academic journey. We bring university information, programs,
              events, and practical resources together so you can spend less
              time searching and more time understanding what comes next.
            </p>

            <div className='mt-10 grid gap-8 md:grid-cols-3'>
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title}>
                    <div className='flex size-11 items-center justify-center rounded-xl bg-muted text-primary'>
                      <Icon className='size-5' />
                    </div>

                    <h3 className='mt-5 text-base font-semibold text-foreground'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
