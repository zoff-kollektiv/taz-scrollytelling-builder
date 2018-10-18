import { findBlockByName } from '../../../template';

const hasExtract = node => {
  const { type } = node;
  const block = findBlockByName(type);

  return block && block.extract;
};

const extractAssets = (node, data) => {
  const { type } = node;
  const block = findBlockByName(type);

  return block.extract(node, data);
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

const serialize = (value, data) => {
  const { document } = value;
  const extractionNodes = [];

  traverse(document.nodes, node => extractionNodes.push(node));

  return extractionNodes.map(node => extractAssets(node, data));
};

export default serialize;
