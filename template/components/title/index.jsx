import React from 'react';

import styles from './styles';

export default {
  name: 'title',
  private: true,
  styles,
  defaultContent: 'Insert title ...',
  Component: props => (
    <h1 className="title" {...props.attributes}>
      <style jsx>{styles}</style>
      {props.children}
    </h1>
  ),

  serialize(obj, children) {
    return (
      <h1 className="title">
        <style jsx>{styles}</style>
        {children}
      </h1>
    );
  }
};
