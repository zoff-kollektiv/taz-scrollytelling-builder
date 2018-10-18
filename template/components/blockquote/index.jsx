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
              text: 'Quote'
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
              text: 'Author'
            }
          ]
        }
      ]
    }
  ]
};

const Blockquote = ({ children }) => (
  <blockquote className="blockquote">
    <style jsx>{styles}</style>

    <LayoutConstraint.Component>
      <div className="icon-container">
        <Icon />
      </div>

      {children}
    </LayoutConstraint.Component>
  </blockquote>
);

export default {
  name: 'blockquote',
  label: 'Quote',
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
