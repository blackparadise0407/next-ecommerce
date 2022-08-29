import { Fragment } from 'react';

import MainLayoutFooter from '../MainLayoutFooter/MainLayoutFooter';
import MainLayoutHeader from '../MainLayoutHeader/MainLayoutHeader';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <MainLayoutHeader />
      <main>{children}</main>
      <MainLayoutFooter />
    </Fragment>
  );
};
export default MainLayout;
