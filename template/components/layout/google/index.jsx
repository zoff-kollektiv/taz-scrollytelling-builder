import React, { Fragment } from 'react';

export default ({ metadata }) => {
  const { description } = metadata;

  return (
    <Fragment>
      {description && <meta name="description" content={description} />}
    </Fragment>
  );
};
