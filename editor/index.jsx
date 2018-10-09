import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

const Application = () => (
  <Router>
    <HomePage path="/" />
    <StoryPage path="story" />
    <MetadataPage path="metadata" />
  </Router>
);

ReactDOM.render(<Application />, document.getElementById('builder'));
