import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Value } from 'slate';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

import initialEditorData from './components/editor/data';
import Store from './lib/store';

class Application extends Component {
  constructor() {
    super();

    this.state.updateMetadata = this.updateMetadata;
    this.state.updateEditor = this.updateEditor;
  }

  state = {
    editor: {
      value: Value.fromJSON(initialEditorData)
    },

    metadata: {
      title: 'New project ...',
      'og:locale': 'de_DE'
    },

    updateEditor() {},
    updateMetadata() {}
  };

  updateEditor = editor => {
    this.setState(prevState => ({
      ...prevState,
      editor
    }));
  };

  updateMetadata = metadata => {
    this.setState(prevState => ({
      ...prevState,
      metadata
    }));
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
