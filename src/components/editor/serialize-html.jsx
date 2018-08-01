import Html from 'slate-html-serializer';
import React from 'react';

import { findBlockByName } from '../../blocks/';

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

      const { serialize } = findBlockByName(type);

      if (!serialize) {
        // for all blocks, which don't have their own serializer function
        return <div>{children}</div>;
      } else {
        return serialize(obj, children);
      }
    }
  }
];

const { serialize } = new Html({ rules });

export { serialize };
