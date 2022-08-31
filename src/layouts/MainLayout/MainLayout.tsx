import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

import MainLayoutFooter from '../MainLayoutFooter/MainLayoutFooter';
import MainLayoutHeader from '../MainLayoutHeader/MainLayoutHeader';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user } = useUser();

  return (
    <React.Fragment>
      <MainLayoutHeader user={user} />
      <main>{children}</main>
      <MainLayoutFooter />
    </React.Fragment>
  );
};
export default MainLayout;
