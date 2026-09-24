import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

const exploreLinks = [
  {
    title: 'Programs',
    href: '/programs',
  },
  {
    title: 'Universities',
    href: '/universities',
  },
  {
    title: 'Events',
    href: '/events',
  },
];

const resourceLinks = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const socialLinks = [
  {
    title: 'Facebook',
    short: 'Fb',
    href: '#',
  },
  {
    title: 'Instagram',
    short: 'Ig',
    href: '#',
  },
  {
    title: 'LinkedIn',
    short: 'In',
    href: '#',
  },
];

export function SiteFooter() {
  return (
    <footer className='border-t border-border bg-foreground text-background'>
      <div className='mx-auto w-full max-w-7xl px-6 lg:px-10'>
        <div className='grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.65fr_0.65fr_1fr] lg:gap-16'>
          {/* Brand */}
          <div className='max-w-md'>
            <Link
              href='/'
              className='group inline-flex items-center gap-3 text-background no-underline hover:text-background'
            >
              <span className='flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-200 group-hover:-translate-y-0.5'>
                <GraduationCap className='size-5' />
              </span>

              <span>
                <span className='block text-base font-bold tracking-tight'>
                  D1 University
                </span>

                <span className='mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-background/45'>
                  Academic Network
                </span>
              </span>
            </Link>

            <p className='mt-6 max-w-sm text-sm leading-7 text-background/60'>
              A connected university platform helping students discover
              programs, explore institutions, and take meaningful steps toward
              their academic future.
            </p>

            <Link
              href='/register'
              className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-background no-underline transition-colors hover:text-background/80'
            >
              Start your journey
              <ArrowUpRight className='size-4' />
            </Link>

            {/* Social links */}
            <div className='mt-8 flex items-center gap-2'>
              {socialLinks.map((social) => (
                <Link
                  key={social.title}
                  href={social.href}
                  aria-label={social.title}
                  className='flex size-9 items-center justify-center rounded-lg border border-background/10 text-xs font-semibold uppercase text-background/55 no-underline transition-colors hover:border-background/20 hover:bg-background/5 hover:text-background'
                >
                  {social.short}
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h2 className='text-sm font-semibold text-background'>Explore</h2>

            <nav aria-label='Explore' className='mt-5 flex flex-col gap-3'>
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='w-fit text-sm text-background/55 no-underline transition-colors hover:text-background'
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className='text-sm font-semibold text-background'>Resources</h2>

            <nav aria-label='Resources' className='mt-5 flex flex-col gap-3'>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='w-fit text-sm text-background/55 no-underline transition-colors hover:text-background'
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className='text-sm font-semibold text-background'>Contact</h2>

            <div className='mt-5 space-y-4'>
              <div className='flex items-start gap-3'>
                <MapPin className='mt-0.5 size-4 shrink-0 text-background/40' />

                <p className='mb-0 text-sm leading-6 text-background/55'>
                  University District
                  <br />
                  Metro Manila, Philippines
                </p>
              </div>

              <a
                href='mailto:hello@d1university.edu'
                className='flex items-center gap-3 text-sm text-background/55 no-underline transition-colors hover:text-background'
              >
                <Mail className='size-4 shrink-0 text-background/40' />
                hello@d1university.edu
              </a>

              <a
                href='tel:+63280001234'
                className='flex items-center gap-3 text-sm text-background/55 no-underline transition-colors hover:text-background'
              >
                <Phone className='size-4 shrink-0 text-background/40' />
                +63 2 8000 1234
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col gap-5 border-t border-background/10 py-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='mb-0 text-xs text-background/40'>
            © {new Date().getFullYear()} D1 University. All rights reserved.
          </p>

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            <Link
              href='/'
              className='text-xs text-background/40 no-underline transition-colors hover:text-background'
            >
              Privacy Policy
            </Link>

            <Link
              href='/'
              className='text-xs text-background/40 no-underline transition-colors hover:text-background'
            >
              Terms of Use
            </Link>

            <Link
              href='/contact'
              className='text-xs text-background/40 no-underline transition-colors hover:text-background'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
