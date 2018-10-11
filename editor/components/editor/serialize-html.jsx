import Html from 'slate-html-serializer';
import React from 'react';

import { findMarkByName } from '../../marks';
import { findBlockByName } from '../../../template';

const serializeNode = (node, children, data) => {
  const { type } = node;
  const block = findBlockByName(type);

  /* if the block doesn't have a serializer, let's try if there is a mark, that
     we can use (e.g. the link mark is actually an Inline)
  */
  if (!block.serialize) {
    const mark = findMarkByName(type);

    if (mark.serialize) {
      return mark.serialize(node, children, data);
    }

    return <span>{children}</span>;
  }

  return block.serialize(node, children, data);
};

const serializeHTML = (value, data = {}) => {
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
        return serializeNode(obj, children, data);
      }
    }
  ];

  const { serialize } = new Html({ rules });

  return serialize(value);
};

export default serializeHTML;
