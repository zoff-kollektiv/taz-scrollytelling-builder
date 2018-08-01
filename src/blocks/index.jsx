import blockquote from './components/blockquote';
import headline2 from './components/headline-2';
import headline3 from './components/headline-3';
import image from './components/image';
import paragraph from './components/paragraph';
import title from './components/title';

const blocks = [blockquote, headline2, headline3, image, paragraph, title];

export { blocks };

const findBlockByName = name => blocks.find(_ => _.name === name) || {};

export { findBlockByName };
