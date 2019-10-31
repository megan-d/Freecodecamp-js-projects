function palindrome(str) {
  // Good luck!
  // remove all non-alphanumeric characters (punctuation, spaces, and symbols) and turn everything into same case
  const plainStr = str.replace(/[\W_]/g, '');
  const lowerStr = plainStr.toLowerCase();
  // reverse the string for comparison by converting to array, reversing, and joining
  const reverseStr = lowerStr
    .split('')
    .reverse()
    .join('');
  // if string forwards is the same as reversed, return true. Otherwise false.
  if (lowerStr === reverseStr) {
    return true;
  }
  return false;
}
