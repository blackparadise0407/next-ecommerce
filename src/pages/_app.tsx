import '@/styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';

import { AppPropsWithLayout } from './page';

function Application({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>;
}

export default Application;
