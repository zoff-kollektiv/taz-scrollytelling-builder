import React, { Fragment } from 'react';

export default ({ data }) => {
  const { description } = data;

  return (
    <Fragment>
      {description && <meta name="description" content={description} />}
    </Fragment>
  );
};
