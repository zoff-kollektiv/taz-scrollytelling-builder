import React from 'react';
import { Link } from '@reach/router';

import styles from './styles';

const linkIsPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: 'item item--is-active' } : null;

export default ({ items }) => (
  <nav className="navigation">
    <style jsx>{styles}</style>

    {items.map(([slug, label]) => (
      <Link
        className="item"
        getProps={linkIsPartiallyActive}
        key={slug}
        to={slug}
      >
        {label}
      </Link>
    ))}
  </nav>
);
