import React, { Fragment } from 'react';

import filename from '../../../editor/lib/filename';

import OpenGraph from './facebook';
import styles from './styles';
import TwitterCard from './twitter';
import Tracking from './tracking';

export default {
  name: 'layout',
  private: true,
  styles,
  Component: ({ children }) => (
    <Fragment>
      <style jsx>{styles}</style>

      {children}
    </Fragment>
  ),

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
    const { locale, title, url } = data.metadata;
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

            <OpenGraph
              data={data.metadata}
              imageFileName={filename(data.metadata['_og:image-name'])}
              src={src}
            />
            <TwitterCard
              data={data.metadata}
              imageFileName={filename(data.metadata['_twitter:image-name'])}
              src={src}
            />

            <style type="text/css">[styles]</style>
          </head>

          <body>
            <article className="app">{children}</article>
          </body>

          <Tracking />
        </html>
      </Fragment>
    );
  }
};
