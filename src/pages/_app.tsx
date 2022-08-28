import '@/styles/globals.css';

import { AppPropsWithLayout } from './page';

function Application({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default Application;
