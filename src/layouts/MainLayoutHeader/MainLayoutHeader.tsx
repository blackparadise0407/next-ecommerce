import Link, { LinkProps } from 'next/link';
import { RiHeart2Line, RiSearch2Line, RiShoppingBagLine } from 'react-icons/ri';

const StyledLink: React.FC<LinkProps & { children: React.ReactNode }> = (
  props,
) => {
  return <Link {...props}>{props.children}</Link>;
};

const MainLayoutHeader: React.FC<{}> = () => {
  return (
    <header>
      <div className="py-2.5 text-sm bg-black text-white">
        <div className="container flex">
          <p>Free shipping, 30 days return or refund guarantee.</p>
          <div className="flex-grow"></div>
          <ul className="flex items-center gap-5 uppercase">
            <li>sign in</li>
            <li>faqs</li>
            <li>usd</li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="container flex items-center">
          <h1 className="flex-1">Dotfashion</h1>
          <ul className="flex-1 flex items-center justify-evenly py-6 gap-2">
            <li>
              <StyledLink href="#">Home</StyledLink>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contacts</Link>
            </li>
          </ul>
          <div className="flex-1 flex text-xl gap-3 justify-end">
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
