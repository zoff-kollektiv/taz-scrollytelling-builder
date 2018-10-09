import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

import Store from '../../lib/store';

export default () => (
  <Store.Consumer>
    {({ title }) => (
      <Layout>
        <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
        <Helmet>
          <title>Metadata - {title}</title>
        </Helmet>
        Meta-Data
      </Layout>
    )}
  </Store.Consumer>
);
