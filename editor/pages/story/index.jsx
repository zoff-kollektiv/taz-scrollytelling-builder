import React from 'react';
import { Helmet } from 'react-helmet';

import Editor from '../../components/editor';
import Layout from '../../components/layout';
import Navigation from '../../components/navigation';

const ProjectContext = React.createContext({});

const project = {
  name: 'taz'
};

export default () => (
  <Layout>
    <Navigation items={[['/story', 'Story'], ['/metadata', 'Metadata']]} />

    <ProjectContext.Provider value={project}>
      <Helmet>
        <title>Hello from Application</title>
      </Helmet>

      <ProjectContext.Consumer>
        {({ name }) => <Editor />}
      </ProjectContext.Consumer>
    </ProjectContext.Provider>
  </Layout>
);
