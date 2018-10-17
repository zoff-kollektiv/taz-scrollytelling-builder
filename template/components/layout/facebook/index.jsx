import React, { Fragment } from 'react';

export default ({ data, src, imageFileName }) => {
  const title = data['og:title'] || data.title;
  const { locale, url } = data;
  const description = data['og:description'] || data.description;
  const excludeFromLoop = ['og:title', 'og:description', 'og:image'];

  return (
    <Fragment>
      {title && <meta property="og:title" content={title} />}

      {locale && <meta property="og:locale" content={locale} />}

      {url && <meta property="og:url" content={url} />}

      {description && <meta property="og:description" content={description} />}

      {imageFileName && (
        <meta property="og:image" content={`${src}${imageFileName}`} />
      )}

      {Object.keys(data).map(key => {
        if (!excludeFromLoop.includes(key) && key.startsWith('og:')) {
          return <meta key={key} property={key} content={data[key]} />;
        }

        return null;
      })}
    </Fragment>
  );
};
