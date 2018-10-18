import React, { Fragment } from 'react';

import filename from '../../../editor/lib/filename';

import Google from './google';
import OpenGraph from './facebook';
import styles from './styles';
import TwitterCard from './twitter';
import Tracking from './tracking';

const Layout = ({ children }) => (
  <Fragment>
    <style jsx>{styles}</style>

    {children}
  </Fragment>
);

export default {
  name: 'layout',
  private: true,
  styles,
  canEdit: false,
  Component: ({ node, ...rest }) => <Layout data={node.data} {...rest} />,

  extract(node, { metadata }) {
    const res = [];

    const facebookImage = metadata['og:image'];
    const twitterImage = metadata['twitter:image'];

    if (facebookImage) {
      res.push({
        name: metadata['_og:image-name'],
        file: facebookImage,
        type: 'image'
      });
    }

    if (twitterImage) {
      res.push({
        name: metadata['_twitter:image-name'],
        file: twitterImage,
        type: 'image'
      });
    }

    return Promise.resolve(res);
  },

  serialize(node, children, data) {
    const { metadata } = data;
    const { locale, title, url } = metadata;
    const src = `${url || '.'}/assets/images/`;

    return (
      <Fragment>
        {'[doctype]'}

        <html lang={locale}>
          <head>
            <meta charSet="utf-8" />

            <title>{title}</title>

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />

            <Google data={metadata} />

            <OpenGraph
              data={metadata}
              imageFileName={filename(metadata['_og:image-name'])}
              src={src}
            />

            <TwitterCard
              data={metadata}
              imageFileName={filename(metadata['_twitter:image-name'])}
              src={src}
            />

            <style type="text/css">[styles]</style>
          </head>

          <body>
            <article className="app">{children}</article>

            <Tracking />
          </body>
        </html>
      </Fragment>
    );
  }
};
