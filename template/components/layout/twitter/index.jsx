import React, { Fragment } from 'react';

export default ({ data, src, imageFileName }) => {
  const title = data['twitter:title'] || data.title;
  const { locale, url } = data;
  const description = data['twitter:description'] || data.description;
  const excludeFromLoop = [
    'twitter:title',
    'twitter:description',
    'twitter:image'
  ];

  return (
    <Fragment>
      {title && <meta property="twitter:title" content={title} />}

      {locale && <meta property="twitter:locale" content={locale} />}

      {url && <meta property="twitter:url" content={url} />}

      {description && (
        <meta property="twitter:description" content={description} />
      )}

      {imageFileName && (
        <meta property="twitter:image" content={`${src}${imageFileName}`} />
      )}

      {Object.keys(data).map(key => {
        if (!excludeFromLoop.includes(key) && key.startsWith('twitter:')) {
          return <meta key={key} property={key} content={data[key]} />;
        }

        return null;
      })}
    </Fragment>
  );
};
