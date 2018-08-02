import blockquote from './components/blockquote';
import header from './components/header';
import headline2 from './components/headline-2';
import headline3 from './components/headline-3';
import image from './components/image';
import intro from './components/intro';
import layout from './components/layout';
import layoutConstraint from './components/layout-constraint';
import paragraph from './components/paragraph';
import title from './components/title';

const blocks = [
  blockquote,
  header,
  headline2,
  headline3,
  image,
  intro,
  layout,
  layoutConstraint,
  paragraph,
  title
];

export { blocks };

const findBlockByName = name => blocks.find(_ => _.name === name) || {};

export { findBlockByName };
