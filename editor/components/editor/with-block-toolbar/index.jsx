import classnames from 'classnames';
import React from 'react';

import editBlockStyles from './styles-edit-block';
import Toolbar from './toolbar';

export default (block, props) => {
  const { isFocused, attributes } = props;
  const { canEdit = true, Component } = block;

  return (
    <div
      className={classnames('block', {
        'block--is-focused': canEdit && isFocused
      })}
      {...attributes}
    >
      <style jsx>{editBlockStyles}</style>

      <Toolbar block={block} {...props} visible={canEdit && isFocused} />

      <Component {...props} />
    </div>
  );
};
