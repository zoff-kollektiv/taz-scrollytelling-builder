import classnames from 'classnames';
import React from 'react';

import FacebookIcon from './facebook.svg';
import LogoIcon from '../../assets/images/logo.svg';
import styles from './styles';
import TwitterIcon from './twitter.svg';

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

const Header = ({ url = '', data, children, twitterTitle = '' }) => {
  const publisher = data.get('publisher');
  const link = data.get('publisher-home-link');
  const title = data.get('header-title');
  const researchType = data.get('header-research-type');
  const Logo = LOGOS[publisher];
  const encodedUrl = encodeURIComponent(url);
  const encodedTwitterTitle = encodeURIComponent(twitterTitle);

  return (
    <header
      className={classnames('header', {
        [`header--publisher-${publisher}`]: true
      })}
      readOnly
    >
      <style jsx>{styles}</style>

      <a href={link} className="logo-publisher">
        {<Logo />}
      </a>

      <div className="logo-container">
        <LogoIcon />
      </div>

      <em className="title" readOnly>
        {title}
        <small className="research-network">{researchType}</small>
      </em>

      {children}

      <div className="share">
        <span className="share-label">Share on</span>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          className="share-button"
        >
          <FacebookIcon />
          <span className="share-button-label">Share on facebook</span>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTwitterTitle}`}
          className="share-button"
        >
          <TwitterIcon />
          <span className="share-button-label">Share on twitter</span>
        </a>
      </div>
    </header>
  );
};

export default {
  styles,
  name: 'header',
  private: true,
  Component: ({ node, ...rest }) => <Header data={node.data} {...rest} />,

  serialize(node, children, data = {}) {
    const { metadata } = data;
    const url = metadata && metadata.url;
    const twitterTitle =
      metadata && (metadata['twitter:title'] || metadata.title);

    return (
      <Header data={node.data} url={url} twitterTitle={twitterTitle}>
        {children}
      </Header>
    );
  }
};
