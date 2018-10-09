import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

import Store from './lib/store';

const Application = () => (
  <Store.Provider
    value={{
      name: 'New project ...'
    }}
  >
    <Router>
      <HomePage path="/" />
      <StoryPage path="story" />
      <MetadataPage path="metadata" />
    </Router>
  </Store.Provider>
);

ReactDOM.render(<Application />, document.getElementById('builder'));
