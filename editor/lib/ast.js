const find = (obj, key, val) => {
  if (!obj || typeof obj === 'string') {
    return null;
  }

  if (obj[key] === val) {
    return obj;
  }

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      const found = find(obj[i], key, val);

      if (found) {
        return found;
      }
    }
  }

  return null;
};

export { find };
