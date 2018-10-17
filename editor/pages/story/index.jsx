import React from 'react';
import { Helmet } from 'react-helmet';

import Editor from '../../components/editor';
import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

import Store from '../../lib/store';

export default () => (
  <Store.Consumer>
    {({ editor, metadata, updateEditor, updateMetadata }) => (
      <Layout>
        <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />
        <Helmet>
          <title>Story - {metadata.title || ''}</title>
        </Helmet>
        <Editor
          updateEditor={updateEditor}
          updateMetadata={updateMetadata}
          state={editor}
          metadata={metadata}
        />
      </Layout>
    )}
  </Store.Consumer>
);
