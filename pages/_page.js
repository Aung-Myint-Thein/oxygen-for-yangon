import React from 'react';
import Layout from '../src/components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;