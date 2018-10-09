import merge from 'deepmerge';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

import Store from './lib/store';

class Application extends Component {
  state = {
    editor: {},

    metadata: {
      title: 'New project ...',
      og: {
        locale: 'de_DE'
      }
    },

    updateMetadata() {}
  };

  constructor() {
    super();

    this.state.updateMetadata = this.updateMetadata;
  }

  updateMetadata = metadata => {
    this.setState(
      merge(this.state, {
        metadata
      })
    );
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <Router>
          <HomePage path="/" />
          <StoryPage path="story" />
          <MetadataPage path="metadata" />
        </Router>
      </Store.Provider>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('builder'));
