import slugify from 'slugify';

const filename = name => {
  if (!name) {
    return false;
  }

  return slugify(name, {
    lower: true
  });
};

export default filename;
