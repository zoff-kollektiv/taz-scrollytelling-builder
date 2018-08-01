import { Helmet } from 'react-helmet';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';

const ProjectContext = React.createContext({});

const project = {
  name: 'taz',
};

const Application = () => {
  return (
    <ProjectContext.Provider value={project}>
      <Helmet>
        <title>Hello from Application</title>
      </Helmet>

      <ProjectContext.Consumer>
        {({ name }) => <Editor />}
      </ProjectContext.Consumer>
    </ProjectContext.Provider>
  )
};

ReactDOM.render(<Application />, document.getElementById('builder'));
