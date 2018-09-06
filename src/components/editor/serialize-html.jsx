import Html from 'slate-html-serializer';
import React from 'react';

import { marks } from '../../marks';
import { findBlockByName } from '../../blocks';

const serializeMark = (mark, children) => {
  const { serialize } = mark;

  if (!serialize) {
    return <span>{children}</span>;
  }

  return serialize(mark, children);
};

const serializeBlock = (block, children) => {
  const { type } = block;
  const { serialize } = findBlockByName(type);

  if (!serialize) {
    return <span>{children}</span>;
  }

  return serialize(block, children);
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

      const mark = marks.find(_ => _.name === type);

      if (mark) {
        return serializeMark(mark, children);
      }

      return serializeBlock(obj, children);
    }
  }
];

const { serialize } = new Html({ rules });

export { serialize };
