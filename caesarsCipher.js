function rot13(str) {
  // LBH QVQ VG!
  // Using loop, get ASCII value of each letter in string and push that value into a new array
  const asciArr = [];
  for (let i = 0; i < str.length; i++) {
    asciArr.push(str.charCodeAt(i));
  }
  // Use map to loop through array of ASCII values and make appropriate shifts if value falls between A-Z.
  const cipherArr = asciArr.map(function(el) {
    let element = el;
    if (el >= 65 && el <= 77) {
      return (element += 13);
    }
    if (el > 77 && el <= 90) {
      return (element = 13 - (90 - el) + 64);
    }
    return el;
  });
  // Convert final array back to letters from ASCII
  const finalArr = cipherArr.map(function(el) {
    return String.fromCharCode(el);
  });
  // Use join method to bring string back together
  const newStr = finalArr.join('');

  return newStr;
}

// Change the inputs below to test
rot13('SERR PBQR PNZC');
