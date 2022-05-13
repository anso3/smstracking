const parseSms = ([amountStr, categoryStr]) => {
  const parsedInt = parseInt(amountStr);
  const category = categoryStr.toUpperCase();
  if (parsedInt <= 0 || isNaN(parsedInt)) {
    throw Error("INT IS NEGATIVE OR CANNOT BE PARSED");
  }

  return [parsedInt, category];
};
export default parseSms;
