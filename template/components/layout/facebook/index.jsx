import React, { Fragment } from 'react';

export default ({ data }) => {
  const title = data['og:title'] || data.title;
  const description = data['og:description'] || data.description;
  const excludeFromLoop = ['og:title', 'og:description'];

  return (
    <Fragment>
      {title && <meta property="og:title" content={title} />}

      {description && <meta property="og:description" content={description} />}

      {Object.keys(data).map(key => {
        if (!excludeFromLoop.includes(key) && key.includes('og:')) {
          return <meta key={key} property={key} content={data[key]} />;
        }

        return null;
      })}
    </Fragment>
  );
};
