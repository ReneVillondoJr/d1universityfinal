import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Having everything in one place helped me understand my options before I started applying.',
    name: 'Mia Santos',
    role: 'First-year university student',
  },
  {
    quote:
      'The university and program information made it much easier to compare different academic paths.',
    name: 'Daniel Reyes',
    role: 'Senior high school graduate',
  },
  {
    quote:
      'It gave me a clearer starting point. I could explore programs first and then look at universities.',
    name: 'Alyssa Cruz',
    role: 'Prospective student',
  },
];

export function Testimonials() {
  return (
    <section className='border-b border-border bg-background'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
            Student perspectives
          </p>

          <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl'>
            A clearer beginning can change the whole journey.
          </h2>

          <p className='mt-5 text-base leading-7 text-muted-foreground sm:text-lg'>
            Students use different paths to make their decisions. Their
            experiences remind us why access to clear information matters.
          </p>
        </div>

        <div className='mt-12 grid gap-4 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className='flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm'
            >
              <Quote className='size-7 text-primary/70' />

              <blockquote className='mt-6 flex-1 text-lg leading-8 text-card-foreground'>
                “{testimonial.quote}”
              </blockquote>

              <div className='mt-8 border-t border-border pt-5'>
                <p className='text-sm font-semibold text-foreground'>
                  {testimonial.name}
                </p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
