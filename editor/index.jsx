import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Layout from './components/layout';
import Navigation from './components/navigation';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

const Application = () => (
  <Layout>
    <Navigation items={[['story', 'Story'], ['metadata', 'Metadata']]} />

    <Router>
      <HomePage path="/" />
      <StoryPage path="story" />
      <MetadataPage path="metadata" />
    </Router>
  </Layout>
);

ReactDOM.render(<Application />, document.getElementById('builder'));
