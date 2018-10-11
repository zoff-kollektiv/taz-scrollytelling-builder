import React, { Fragment } from 'react';

import OpenGraph from './facebook';
import styles from './styles';
import TwitterCard from './twitter';

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

  serialize(node, children, data) {
    const { title } = data.metadata;
    const locale = data.metadata['og:locale'];

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

            <OpenGraph data={data.metadata} />
            <TwitterCard data={data.metadata} />

            <style type="text/css">[styles]</style>
          </head>

          <body>
            <article className="app">{children}</article>
          </body>
        </html>
      </Fragment>
    );
  }
};
