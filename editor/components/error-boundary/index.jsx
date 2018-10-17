import React, { Component } from 'react';

import styles from './styles';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <style jsx>{styles}</style>

          <h1 className="title">{this.state.error.toString()}</h1>
          <pre className="stack">{this.state.info.componentStack}</pre>

          {this.state.error.stack && (
            <pre className="stack">{this.state.error.stack}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
