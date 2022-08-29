import { Fragment } from 'react';

import MainLayoutHeader from '../MainLayoutHeader/MainLayoutHeader';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <MainLayoutHeader />
      <main>{children}</main>
    </Fragment>
  );
};
export default MainLayout;
