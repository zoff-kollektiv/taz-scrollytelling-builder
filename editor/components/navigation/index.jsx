import React from 'react';
import { Link } from '@reach/router';

import styles from './styles';

export default ({ items }) => (
  <nav className="navigation">
    <style jsx>{styles}</style>

    {items.map(([slug, label]) => (
      <Link key={slug} to={slug}>
        {label}
      </Link>
    ))}
  </nav>
);
