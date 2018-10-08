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

const selectionHasLink = state =>
  state.activeMarks.some(_ => _.type === 'link');

export default {
  label: 'Link',
  name: 'link',
  Icon: LinkIcon,
  Mark: props => <a {...props.attributes}>{props.children}</a>,
  serialize: (mark, children) => <a>{children}</a>,
  onSelect(state, update) {
    const change = state.change().toggleMark('link');

    if (!selectionHasLink(state)) {
      // eslint-disable-next-line no-alert
      const href = window.prompt('Enter the URL of the link:');
      change.call(wrapLink, href);
    }

    update(change);
  }
};
