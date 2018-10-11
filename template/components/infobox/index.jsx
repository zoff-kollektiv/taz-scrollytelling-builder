import React from 'react';

import layoutConstraint from '../layout-constraint';
import LogoIcon from './logo.svg';
import styles from './styles';

const BLOCK_DEFINITION = {
  object: 'block',
  type: 'infobox',
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
    }
  ]
};

const InfoBox = ({ attributes = {}, children }) => (
  <div className="infobox" {...attributes}>
    <style jsx>{styles}</style>

    <div className="logo-container">
      <LogoIcon style={{ height: '4rem', width: '4rem' }} />
    </div>

    <layoutConstraint.Component attributes={{}}>
      {children}
    </layoutConstraint.Component>
  </div>
);

export default {
  name: 'infobox',
  styles,
  Component: ({ node, ...rest }) => <InfoBox data={node.data} {...rest} />,

  serialize: (node, children) => <InfoBox data={node.data}>{children}</InfoBox>,

  insert(change) {
    change.insertBlock(BLOCK_DEFINITION);
  }
};
