import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

import Store from '../../lib/store';

export default () => (
  <Store.Consumer>
    {({ name }) => (
      <Layout>
        <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
        <Helmet>
          <title>Metadata - {name}</title>
        </Helmet>
        Meta-Data
      </Layout>
    )}
  </Store.Consumer>
);
