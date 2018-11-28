import React, { Component } from 'react';

import Icon from './twitter.svg';
import LayoutConstraint from '../layout-constraint';
import Textarea from '../../../editor/components/form/textarea';

import styles from './styles';

class Tweet extends Component {
  // inject twitters script tag, which then takes care of the tweet rendering
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    if (document && document.body) {
      document.body.appendChild(script);
    }
  }

  render() {
    const { data, children } = this.props;
    const embedCode = data.get('embedCode');

    return (
      <div className="tweet-container" readOnly>
        <style jsx>{styles}</style>

        <LayoutConstraint.Component>
          <div
            className="tweet-inner-container"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
          {children}
        </LayoutConstraint.Component>
      </div>
    );
  }
}

export default {
  name: 'tweet',
  label: 'Tweet',
  Component: ({ node, ...rest }) => <Tweet data={node.data} {...rest} />,
  styles,
  Icon,
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
