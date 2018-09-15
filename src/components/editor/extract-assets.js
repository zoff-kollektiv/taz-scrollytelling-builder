import { findBlockByName } from '../../blocks';

const hasExtract = node => {
  const { type } = node;
  const block = findBlockByName(type);

  return block && block.extract;
};

const extractAssets = node => {
  const { type } = node;
  const block = findBlockByName(type);

  return block.extract(node);
};

const traverse = (nodes, callback) => {
  nodes.forEach(node => {
    if (hasExtract(node)) {
      callback(node);
    }

    if (node.nodes) {
      traverse(node.nodes, callback);
    }
  });
};

const serialize = value => {
  const { document } = value;
  const extractionNodes = [];

  traverse(document.nodes, node => extractionNodes.push(node));

  return extractionNodes.map(extractAssets);
};

export { serialize };
