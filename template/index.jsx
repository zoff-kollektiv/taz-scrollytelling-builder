import { Block } from 'slate';

import authors from './components/authors';
import blockquote from './components/blockquote';
import blockquoteAuthor from './components/blockquote-author';
import fonts from './components/fonts';
import header from './components/header';
import headline2 from './components/headline-2';
import headline3 from './components/headline-3';
import headline4 from './components/headline-4';
import image from './components/image';
import imageCaption from './components/image-caption';
import intro from './components/intro';
import introContainer from './components/intro-container';
import infobox from './components/infobox';
import layout from './components/layout';
import layoutConstraint from './components/layout-constraint';
import paragraph from './components/paragraph';
import paragraphStandalone from './components/paragraph-standalone';
import publicationDate from './components/publication-date';
import standfirst from './components/standfirst';
import title from './components/title';

const blocks = [
  authors,
  blockquote,
  blockquoteAuthor,
  fonts,
  header,
  headline2,
  headline3,
  headline4,
  image,
  imageCaption,
  intro,
  introContainer,
  infobox,
  layout,
  layoutConstraint,
  paragraph,
  paragraphStandalone,
  publicationDate,
  standfirst,
  title
];

export { blocks };

const findBlockByName = name => blocks.find(_ => _.name === name) || {};

export { findBlockByName };

const schema = {
  document: {
    last: { type: 'paragraph-standalone' },
    normalize: (change, { code, node }) => {
      switch (code) {
        case 'last_child_type_invalid': {
          const block = Block.create('paragraph-standalone');
          return change.insertNodeByKey(node.key, node.nodes.size, block);
        }

        default:
          return null;
      }
    }
  }
};

export { schema };
