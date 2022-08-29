import { useUser } from '@auth0/nextjs-auth0';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RiHeart2Line, RiSearch2Line, RiShoppingBagLine } from 'react-icons/ri';

import { useWindowSize } from '@/hooks/useWindowSize';

const StyledLink: React.FC<
  LinkProps & {
    active?: boolean;
    children: React.ReactNode;
  }
> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link {...rest} className="block">
      <span className="font-medium hover:text-red-400 transition-colors cursor-pointer">
        {children}
      </span>
    </Link>
  );
};

const routes: Array<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/pages', label: 'Pages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacts', label: 'Contacts' },
];

const MainLayoutHeader: React.FC<{}> = () => {
  const { user } = useUser();
  const { asPath } = useRouter();
  const [lineStyle, setLineStyle] = React.useState<React.CSSProperties>({
    bottom: 15,
    transition: 'left 0.2s ease, width 0.2s ease',
  });
  const [w] = useWindowSize();

  React.useEffect(() => {
    const ele = document.getElementById(asPath);
    setLineStyle((prev) => ({
      ...prev,
      left: ele?.offsetLeft,
      width: ele?.clientWidth,
    }));
  }, [asPath, w]);

  return (
    <header>
      <div className="py-2.5 text-sm bg-black text-white">
        <div className="container flex">
          <p>Free shipping, 30 days return or refund guarantee.</p>
          <div className="flex-grow"></div>
          <ul className="flex items-center gap-6 uppercase tracking-widest">
            <li>
              {user ? (
                <React.Fragment>
                  <span className="normal-case">Hi</span>,{' '}
                  <Link href={`/${user.email}`}>{user.name}</Link>
                </React.Fragment>
              ) : (
                <Link href="/api/auth/login">sign in</Link>
              )}
            </li>
            <li>faqs</li>
            <li>usd</li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="container flex items-center">
          <h1 className="flex-1">Dotfashion</h1>
          <ul className="relative flex-1 flex items-center justify-evenly py-6 gap-10">
            {routes.map((r) => (
              <li key={r.href} id={r.href}>
                <StyledLink href={r.href}>{r.label}</StyledLink>
              </li>
            ))}
            <li className="absolute h-[2px] bg-red-500" style={lineStyle} />
          </ul>
          <div className="flex-1 flex text-xl gap-5 justify-end">
            <RiSearch2Line />
            <RiHeart2Line />
            <RiShoppingBagLine />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainLayoutHeader;