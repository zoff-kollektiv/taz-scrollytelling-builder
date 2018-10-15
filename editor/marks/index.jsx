import link from './link';
import bold from './bold';
import highlight from './highlight';
import italic from './italic';
import underlined from './underlined';

const marks = [link, bold, highlight, italic, underlined];

const findMarkByName = name => marks.find(_ => _.name === name) || {};

export { findMarkByName, marks };
