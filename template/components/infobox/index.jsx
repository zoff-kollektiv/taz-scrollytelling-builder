import React from 'react';

import InfoIcon from './info.svg';
import layoutConstraint from '../layout-constraint';
import LogoIcon from '../../assets/images/logo.svg';
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

const InfoBox = ({ children }) => (
  <div className="infobox">
    <style jsx>{styles}</style>

    <div className="logo-container">
      <LogoIcon />
    </div>

    <layoutConstraint.Component>{children}</layoutConstraint.Component>
  </div>
);

export default {
  name: 'infobox',
  label: 'Infobox',
  Icon: InfoIcon,
  styles,
  Component: ({ node, ...rest }) => <InfoBox data={node.data} {...rest} />,

  serialize: (node, children) => <InfoBox data={node.data}>{children}</InfoBox>,

  insert(change) {
    change.insertBlock(BLOCK_DEFINITION);
  }
};
