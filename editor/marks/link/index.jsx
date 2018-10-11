import isUrl from 'is-url';
import React from 'react';

import LinkIcon from './link.svg';

const wrapLink = (change, href) => {
  const data = { href };

  change
    .wrapInline({
      type: 'link',
      data
    })
    .moveToEnd();
};

const unwrapLink = change => {
  change.unwrapInline('link');
};

const selectionHasLink = state => state.inlines.some(_ => _.type === 'link');

export default {
  label: 'Link',
  name: 'link',
  Icon: LinkIcon,
  Mark: props => {
    const { node } = props;
    const { data } = node;
    const href = data.get('href');

    return (
      <a href={href} {...props.attributes}>
        {props.children}
      </a>
    );
  },

  serialize: ({ data }, children) => {
    const href = data.get('href');
    return <a href={href}>{children}</a>;
  },

  onSelect(state, change) {
    if (!selectionHasLink(state)) {
      // eslint-disable-next-line no-alert
      const href = window.prompt('Enter the URL of the link:');

      if ((href && href.startsWith('#')) || isUrl(href)) {
        change.call(wrapLink, href);
      }
    } else {
      change.call(unwrapLink);
    }
  }
};
