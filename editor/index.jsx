import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Value } from 'slate';

import StoryPage from './pages/story';
import HomePage from './pages/home';
import MetadataPage from './pages/metadata';

import Store from './lib/store';

class Application extends Component {
  constructor() {
    super();

    this.state.updateMetadataField = this.updateMetadataField;
    this.state.updateMetadata = this.updateMetadata;
    this.state.updateEditor = this.updateEditor;
  }

  state = {
    editor: {
      value: Value.fromJSON({
        document: {
          nodes: [
            {
              object: 'block',
              type: 'layout',
              nodes: [
                {
                  object: 'block',
                  type: 'fonts'
                },

                {
                  object: 'block',
                  type: 'paragraph-standalone',
                  nodes: [
                    {
                      object: 'text',
                      leaves: [
                        {
                          text: 'Start typing …'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      })
    },

    metadata: {
      title: '',
      description: '',
      locale: 'de_DE',
      'og:type': 'website',
      'twitter:card': 'summary_large_image'
    },

    updateEditor() {},
    updateMetadata() {},
    updateMetadataField() {}
  };

  updateEditor = editor => {
    this.setState(prevState => ({
      ...prevState,
      editor
    }));
  };

  updateMetadataField = (name, value) => {
    this.setState(prevState => ({
      ...prevState,
      metadata: {
        ...prevState.metadata,
        [name]: value
      }
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
