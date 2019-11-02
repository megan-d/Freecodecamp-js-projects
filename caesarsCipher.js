function rot13(str) {
  // LBH QVQ VG!
  // 1. Using loop, get ASCII value of each letter in string using str.charCodeAt and push that value into a new array
  const asciArr = [];
  for (let i = 0; i < str.length; i++) {
    asciArr.push(str.charCodeAt(i));
  }
  console.log({ asciArr });

  // 2. Loop through array of asci values. Say if value is within range of A-Z ascii (65 - 90), shift that value by 13. Otherwise, just keep that value the same (punctuation and spaces).
  // NEED TO FIGURE OUT HOW TO DEAL WITH ONCE GET TO Z GOING BACK TO A. SOMETHING TO DO WITH %.
  const cipherArr = asciArr.map(function(el) {
    if (el >= 65 && el <= 90) {
      return (el += 13);
    }
    return (el = el);
  });
  console.log({ cipherArr });

  // 3. Convert final array back to letters from ascii using String.fromCharCode
  const finalArr = cipherArr.map(function(el) {
    return String.fromCharCode(el);
  });
  console.log({ finalArr });

  // 4. Use join method to bring string back together
  const newStr = finalArr.join('');

  return newStr;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
