import React from 'react';

import LinkIcon from './link.svg';

const wrapLink = (change, href) => {
  change.wrapInline({
    type: 'link',
    data: { href }
  });
};

const selectionHasLink = state =>
  state.activeMarks.some(_ => _.type === 'link');

export default {
  label: 'Link',
  name: 'link',
  Icon: LinkIcon,
  Mark: props => <a href="test">{props.children}</a>,
  serialize: (mark, children) => <a>{children}</a>,
  onSelect(state, update) {
    const change = state.change().toggleMark('link');

    // eslint-disable-next-line no-alert
    if (!selectionHasLink(state)) {
      const href = window.prompt('Enter the URL of the link:');
      change.call(wrapLink, href);
    }

    update(change);
  }
};
