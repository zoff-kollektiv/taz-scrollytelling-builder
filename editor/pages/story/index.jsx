import React from 'react';
import { Helmet } from 'react-helmet';

import Editor from '../../components/editor';
import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

import Store from '../../lib/store';

export default () => (
  <Store.Consumer>
    {({ name }) => (
      <Layout>
        <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
        <Helmet>
          <title>Story - {name}</title>
        </Helmet>

        <Editor />
      </Layout>
    )}
  </Store.Consumer>
);
