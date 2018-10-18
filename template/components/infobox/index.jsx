import React from 'react';

import InfoIcon from './info.svg';
import layoutConstraint from '../layout-constraint';
import LogoIcon from '../../assets/images/logo.svg';
import styles from './styles';

import LogoFalter from '../../assets/images/falter-logo.svg';
import LogoGazeta from '../../assets/images/gazeta-logo.svg';
import LogoHVG from '../../assets/images/hvg-logo.svg';
import LogoInternazionale from '../../assets/images/internazionale-logo.svg';
import LogoLiberation from '../../assets/images/liberation-logo.svg';
import LogoTaz from '../../assets/images/taz-logo.svg';

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
              text: 'Content …'
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

    <layoutConstraint.Component>
      {children}

      <div className="publishers" readOnly>
        <LogoFalter />
        <LogoGazeta />
        <LogoHVG />
        <LogoInternazionale />
        <LogoLiberation />
        <LogoTaz />
      </div>
    </layoutConstraint.Component>
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
