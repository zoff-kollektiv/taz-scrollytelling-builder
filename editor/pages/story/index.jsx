import React from 'react';
import { Helmet } from 'react-helmet';

import Editor from '../../components/editor';

const ProjectContext = React.createContext({});

const project = {
  name: 'taz'
};

export default () => (
  <ProjectContext.Provider value={project}>
    <Helmet>
      <title>Hello from Application</title>
    </Helmet>

    <ProjectContext.Consumer>
      {({ name }) => <Editor />}
    </ProjectContext.Consumer>
  </ProjectContext.Provider>
);
