import { findBlockByName } from '../../blocks';

// document.nodes is an immutable.js List, so I have to convert into a
// standard array first
const createArray = list => list.toArray();

const extractAssets = node => {
  const { type } = node;
  const block = findBlockByName(type);

  const { nodes } = node;

  if (nodes) {
    createArray(nodes).map(extractAssets);
  }

  if (block && block.extract) {
    return block.extract(node);
  }

  return Promise.resolve();
};

const serialize = value => {
  const { document } = value;
  return createArray(document.nodes).map(extractAssets);
};

export { serialize };
