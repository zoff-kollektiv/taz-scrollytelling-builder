import React, { Fragment } from 'react';

import Textarea from '../../../editor/components/form/textarea';

const Tweet = ({ data, children }) => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: data.get('embedCode') }} />
    {children}
  </Fragment>
);

export default {
  name: 'tweet',
  label: 'Tweet',
  Component: ({ node, ...rest }) => <Tweet data={node.data} {...rest} />,

  onSelect({ embedCode }) {
    return {
      fields: [
        <Textarea
          name="embedCode"
          label="Tweet Embed Code"
          defaultValue={embedCode}
        />
      ]
    };
  },

  serialize: (node, children) => <Tweet data={node.data}>{children}</Tweet>
};
