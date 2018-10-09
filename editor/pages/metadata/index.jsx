import React from 'react';

import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

export default () => (
  <Layout>
    <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
    Meta-Data
  </Layout>
);
