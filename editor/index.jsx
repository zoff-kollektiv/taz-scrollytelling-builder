import { Helmet } from 'react-helmet';
import React from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';
import Layout from './components/layout';

const ProjectContext = React.createContext({});

const project = {
  name: 'taz'
};

const Application = () => (
  <Layout>
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

ReactDOM.render(<Application />, document.getElementById('builder'));
