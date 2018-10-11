import React, { Fragment } from 'react';

export default ({ data }) => {
  const title = data['twitter:title'] || data.title;
  const description = data['twitter:description'] || data.description;
  const excludeFromLoop = ['twitter:title', 'twitter:description'];

  return (
    <Fragment>
      {title && <meta property="twitter:title" content={title} />}

      {description && (
        <meta property="twitter:description" content={description} />
      )}

      {Object.keys(data).map(key => {
        if (!excludeFromLoop.includes(key) && key.includes('twitter:')) {
          return <meta key={key} property={key} content={data[key]} />;
        }

        return null;
      })}
    </Fragment>
  );
};
