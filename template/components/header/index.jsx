import React from 'react';

import LogoIcon from '../../assets/images/logo.svg';
import styles from './styles';

const Header = ({ data, children, attributes = {} }) => {
  const publisher = data.get('publisher');
  const title = data.get('header-title');
  const researchType = data.get('header-research-type');

  return (
    <header className="header" readOnly {...attributes}>
      <style jsx>{styles}</style>

      <strong>{publisher}</strong>

      <div className="logo-container">
        <LogoIcon />
      </div>

      <em className="title">
        {title}
        <small className="research-network">{researchType}</small>
      </em>

      {children}
    </header>
  );
};

export default {
  styles,
  name: 'header',
  private: true,
  Component: ({ node, ...rest }) => <Header data={node.data} {...rest} />,

  serialize(node, children) {
    return <Header data={node.data}>{children}</Header>;
  }
};
