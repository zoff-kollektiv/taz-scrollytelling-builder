import React from 'react';

import LogoIcon from '../../assets/images/logo.svg';
import styles from './styles';

const Header = ({ data, children, attributes = {} }) => {
  const publisher = data.get('publisher');
  const title = data.get('header-title');

  return (
    <header className="header" {...attributes}>
      <style jsx>{styles}</style>

      <strong>{publisher}</strong>

      <div className="logo-container">
        <LogoIcon />
      </div>

      <em className="title">{title}</em>

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
