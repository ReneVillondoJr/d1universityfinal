'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const navigation = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Programs',
    href: '/programs',
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Universities',
    href: '/universities',
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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'>
      <div className='mx-auto w-full max-w-7xl px-6 lg:px-10'>
        <div className='flex h-18 items-center justify-between gap-6'>
          {/* Brand */}
          <Link
            href='/'
            onClick={closeMobileMenu}
            className='group flex shrink-0 items-center gap-3 text-foreground no-underline hover:text-foreground'
          >
            <span className='flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5'>
              <GraduationCap className='size-5' />
            </span>

            <span className='hidden sm:block'>
              <span className='block text-sm font-bold leading-none tracking-tight'>
                D1 University
              </span>

              <span className='mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground'>
                Academic Network
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label='Main navigation'
            className='hidden items-center gap-1 lg:flex'
          >
            <Link
              href='/'
              className={`rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors ${
                isActive('/') ?
                  'bg-muted text-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              Home
            </Link>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors ${
                  isActive(item.href) ?
                    'bg-muted text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className='hidden items-center gap-3 lg:flex'>
            <Link
              href='/programs'
              className='inline-flex items-center gap-1.5 px-2 text-sm font-medium text-muted-foreground no-underline transition-colors hover:text-foreground'
            >
              Find a program
              <ChevronDown className='size-3.5' />
            </Link>

            <Link
              href='/register'
              className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground no-underline transition-colors hover:bg-accent hover:text-accent-foreground'
            >
              Get started
              <ArrowRight className='size-4' />
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button
            type='button'
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className='flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden'
          >
            {mobileOpen ?
              <X className='size-5' />
            : <Menu className='size-5' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className='border-t border-border py-5 lg:hidden'>
            <nav aria-label='Mobile navigation' className='flex flex-col gap-1'>
              <Link
                href='/'
                onClick={closeMobileMenu}
                className={`rounded-md px-4 py-3 text-sm font-medium no-underline transition-colors ${
                  isActive('/') ?
                    'bg-muted text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                Home
              </Link>

              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`rounded-md px-4 py-3 text-sm font-medium no-underline transition-colors ${
                    isActive(item.href) ?
                      'bg-muted text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className='mt-4 border-t border-border pt-4'>
              <Link
                href='/register'
                onClick={closeMobileMenu}
                className='inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground no-underline transition-colors hover:bg-accent hover:text-accent-foreground'
              >
                Get started
                <ArrowRight className='size-4' />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
