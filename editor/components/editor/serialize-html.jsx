import Html from 'slate-html-serializer';
import React from 'react';

import { findMarkByName } from '../../marks';
import { findBlockByName } from '../../../template';

const serializeNode = (node, children) => {
  const { type } = node;
  const block = findBlockByName(type);

  /* if the block doesn't have a serializer, let's try if there is a mark, that
     we can use (e.g. the link mark is actually an Inline)
  */
  if (!block.serialize) {
    const mark = findMarkByName(type);

    if (mark.serialize) {
      return mark.serialize(node, children);
    }

    return <span>{children}</span>;
  }

  return block.serialize(node, children);
};

const rules = [
  {
    deserialize() {
      // no-op for now
    },

    serialize(obj, children) {
      const { type } = obj;

      // text nodes should not be serialized
      if (!type) {
        return;
      }

      // eslint-disable-next-line consistent-return
      return serializeNode(obj, children);
    }
  }
];

const { serialize } = new Html({ rules });

export { serialize };
