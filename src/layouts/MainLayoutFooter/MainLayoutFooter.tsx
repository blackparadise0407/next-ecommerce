import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/common/routing';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const shoppingSection = [
  { href: ROUTES.shop, label: 'Shop' },
  { href: ROUTES.blog, label: 'Blog' },
  { href: ROUTES.contacts, label: 'Contacts' },
];

const resourcesSection = [
  { href: ROUTES.shop, label: 'Career' },
  { href: ROUTES.blog, label: 'Help Center' },
];

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div className="col-span-1 space-y-6">
      <h5 className="uppercase font-medium tracking-widest">{title}</h5>
      {children}
    </div>
  );
};

const MainLayoutFooter: React.FC<{}> = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-4">
          <FooterSection title="Dotfashion">
            <p className="text-sm text-neutral-400">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <picture className="block">
              <img src="/payment.jpg" alt="Payment methods" />
            </picture>
          </FooterSection>
          <FooterSection title="Shopping">
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {shoppingSection.map((it) => (
                <li key={it.href}>
                  <Link href={it.href}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>
          <FooterSection title="Resources">
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {resourcesSection.map((it) => (
                <li key={it.href}>
                  <Link href={it.href}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>
          <FooterSection title="Newsletter">
            <p className="text-sm text-neutral-400">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
          </FooterSection>
        </div>
        <hr className="mt-10 border-t-neutral-800" />
        <div className="py-5 text-center text-sm text-neutral-400">
          Copyright © 2022 All rights reserved | Made with by Kyle with &#9829;
        </div>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;
