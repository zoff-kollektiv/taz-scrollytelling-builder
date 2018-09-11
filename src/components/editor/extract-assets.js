import { findBlockByName } from '../../blocks';

// document.nodes is an immutable.js List, so I have to convert into a
// standard array first
const createArray = list => list.toArray();

const extractAssets = node => {
  const { type } = node;
  const block = findBlockByName(type);

  if (block && block.extract) {
    return block.extract(node);
  }

  return null;
};

const serialize = value => {
  const { document } = value;

  return createArray(document.nodes).map(node => {
    if (node && node.nodes) {
      return createArray(node.nodes).map(extractAssets).filter(Boolean);
    }

    return extractAssets(node);
  }).filter(Boolean);
};

export { serialize };
