import classnames from 'classnames';
import React from 'react';

import LogoIcon from '../../assets/images/logo.svg';
import styles from './styles';

import LogoFalter from '../../assets/images/falter-logo.svg';
import LogoGazeta from '../../assets/images/gazeta-logo.svg';
import LogoHVG from '../../assets/images/hvg-logo.svg';
import LogoInternazionale from '../../assets/images/internazionale-logo.svg';
import LogoLiberation from '../../assets/images/liberation-logo.svg';
import LogoTaz from '../../assets/images/taz-logo.svg';

const LOGOS = {
  taz: LogoTaz,
  gazeta: LogoGazeta,
  internazionale: LogoInternazionale,
  liberation: LogoLiberation,
  falter: LogoFalter,
  hvg: LogoHVG
};

const Header = ({ data, children }) => {
  const publisher = data.get('publisher');
  const title = data.get('header-title');
  const researchType = data.get('header-research-type');
  const Logo = LOGOS[publisher];

  return (
    <header
      className={classnames('header', {
        [`header--publisher-${publisher}`]: true
      })}
      readOnly
    >
      <style jsx>{styles}</style>

      <div className="logo-publisher">{<Logo />}</div>

      <div className="logo-container">
        <LogoIcon />
      </div>

      <em className="title" readOnly>
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
