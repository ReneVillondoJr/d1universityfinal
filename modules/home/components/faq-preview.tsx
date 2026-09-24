import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What can I explore on the platform?',
    answer:
      'You can explore universities, academic programs, upcoming events, and information that can help you understand your education options.',
  },
  {
    question: 'Can I compare different universities?',
    answer:
      'University profiles provide a structured way to explore institutions, locations, program offerings, and other important information.',
  },
  {
    question: 'How do I start exploring programs?',
    answer:
      'Start with the Programs section and browse broad fields of study before exploring specific program and university information.',
  },
  {
    question: 'Can I register my interest?',
    answer:
      'Yes. You can use the registration page to submit your information and indicate your academic interests.',
  },
];

export function FaqPreview() {
  return (
    <section className='border-b border-border bg-muted/40'>
      <div className='mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28'>
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-primary'>
              Frequently asked questions
            </p>

            <h2 className='mt-4 text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl'>
              Start with the questions you already have.
            </h2>

            <p className='mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg'>
              Get quick answers about universities, programs, events, and
              getting started.
            </p>

            <Link
              href='/faq'
              className='mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary'
            >
              View all FAQs
              <ArrowRight className='size-4' />
            </Link>
          </div>

          <div className='overflow-hidden rounded-2xl border border-border bg-card'>
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className={
                  index !== faqs.length - 1 ? 'border-b border-border' : ''
                }
              >
                <details className='group'>
                  <summary className='flex cursor-pointer list-none items-center justify-between gap-5 p-6'>
                    <span className='text-base font-semibold text-card-foreground'>
                      {faq.question}
                    </span>

                    <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-transform group-open:rotate-180'>
                      <ChevronDown className='size-4' />
                    </span>
                  </summary>

                  <div className='px-6 pb-6 pr-16'>
                    <p className='text-sm leading-6 text-muted-foreground'>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
