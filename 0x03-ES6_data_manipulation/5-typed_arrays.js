const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const intallArray = new IntallArray(buffer);
  if (position > intallArray.length) throw new Error('Position outside range');
  intallArray[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
