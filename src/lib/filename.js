import slugify from 'slugify';

const filename = name =>
  slugify(name, {
    lower: true
  });

export default filename;
