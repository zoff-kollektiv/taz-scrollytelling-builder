import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../../components/layout';
import Metadata from '../../components/metadata';
import Navigation from '../../components/navigation';

import Store from '../../lib/store';

export default () => (
  <Store.Consumer>
    {({ metadata, updateMetadataField }) => (
      <Layout>
        <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
        <Helmet>
          <title>Metadata - {metadata.title}</title>
        </Helmet>

        <Metadata
          metadata={metadata}
          updateMetadataField={updateMetadataField}
        />
      </Layout>
    )}
  </Store.Consumer>
);
