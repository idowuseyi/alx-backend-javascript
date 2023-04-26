const cleanSet = (set, startString) => {
  const allstring = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      allstring.push(s.slice(startString.length));
    }
  });
  return allstring.join('-');
};

export default cleanSet;

