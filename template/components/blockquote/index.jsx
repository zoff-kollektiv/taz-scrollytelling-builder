import React from 'react';

import LayoutConstraint from '../layout-constraint';
import Icon from './quote-right.svg';
import styles from './styles';

export default {
  name: 'blockquote',
  Icon,
  styles,
  defaultContent: 'Add a quote here ...',
  Component: props => (
    <blockquote className="blockquote" {...props.attributes}>
      <style jsx>{styles}</style>

      <LayoutConstraint.Component>
        <div className="icon-container">
          <Icon style={{ height: '3rem', width: '3rem' }} />
        </div>

        <p className="text">{props.children}</p>

        <p className="author">Autor*in Nachname</p>
      </LayoutConstraint.Component>
    </blockquote>
  )
};
