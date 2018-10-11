import React from 'react';

import LayoutConstraint from '../layout-constraint';
import Icon from './quote-right.svg';
import styles from './styles';

const BLOCK_DEFINITION = {
  object: 'block',
  type: 'blockquote',
  nodes: [
    {
      object: 'block',
      type: 'paragraph',
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              text: ''
            }
          ]
        }
      ]
    },
    {
      object: 'block',
      type: 'blockquote-author',
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              text: 'Zitat - AutorIn'
            }
          ]
        }
      ]
    }
  ]
};

const Blockquote = ({ attributes = {}, children }) => (
  <blockquote className="blockquote" {...attributes}>
    <style jsx>{styles}</style>

    <LayoutConstraint.Component>
      <div className="icon-container">
        <Icon style={{ height: '3rem', width: '3rem' }} />
      </div>

      {children}
    </LayoutConstraint.Component>
  </blockquote>
);

export default {
  name: 'blockquote',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Blockquote data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Blockquote data={node.data}>{children}</Blockquote>
  ),

  insert(change) {
    change.insertBlock(BLOCK_DEFINITION);
  }
};
