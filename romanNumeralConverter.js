// chart of values
const romans = [
  {
    number: 1,
    roman: 'I',
  },
  {
    number: 2,
    roman: 'II',
  },
  {
    number: 3,
    roman: 'III',
  },
  {
    number: 4,
    roman: 'IV',
  },
  {
    number: 5,
    roman: 'V',
  },
  {
    number: 6,
    roman: 'VI',
  },
  {
    number: 7,
    roman: 'VII',
  },
  {
    number: 8,
    roman: 'VIII',
  },
  {
    number: 9,
    roman: 'IX',
  },
  {
    number: 10,
    roman: 'X',
  },
  {
    number: 20,
    roman: 'XX',
  },
  {
    number: 30,
    roman: 'XXX',
  },
  {
    number: 40,
    roman: 'XL',
  },
  {
    number: 50,
    roman: 'L',
  },
  {
    number: 60,
    roman: 'LX',
  },
  {
    number: 70,
    roman: 'LXX',
  },
  {
    number: 80,
    roman: 'LXXX',
  },
  {
    number: 90,
    roman: 'XC',
  },
  {
    number: 100,
    roman: 'C',
  },
  {
    number: 200,
    roman: 'CC',
  },
  {
    number: 300,
    roman: 'CCC',
  },
  {
    number: 400,
    roman: 'CD',
  },
  {
    number: 500,
    roman: 'D',
  },
  {
    number: 600,
    roman: 'DC',
  },
  {
    number: 700,
    roman: 'DCC',
  },
  {
    number: 800,
    roman: 'DCCC',
  },
  {
    number: 900,
    roman: 'CM',
  },
  {
    number: 1000,
    roman: 'M',
  },
  {
    number: 2000,
    roman: 'MM',
  },
  {
    number: 3000,
    roman: 'MMM',
  },
  {
    number: 4000,
    roman: 'MMMM',
  },
];

function convertToRoman(num) {
  // take input number and break it up into thousands, hundreds, tens, and ones.
  const thousands = Math.trunc(num / 1000) * 1000;
  // if (num >= 1000) {
  //   thousands = Math.trunc(num / 1000) * 1000;
  // } else {
  //   thousands = 0;
  // }
  const hundreds = Math.trunc((num % 1000) / 100) * 100;
  const tens = Math.trunc(((num % 1000) % 100) / 10) * 10;
  const ones = parseInt(
    num
      .toString()
      .split('')
      .pop()
  );

  // Filter romans object for each (thousands, hundreds, etc). If key matches the above value, then set that string equal to the value of that key.
  // May want to create a separate helper function for the filter

  // THOUSANDS. Need to have edge case for if there is nothing in thousands place.
  const thousandsMatch = romans.filter(el => thousands === el.number);
  let thousandsString;
  if (thousandsMatch[0]) {
    thousandsString = thousandsMatch[0].roman;
  } else {
    thousandsString = '';
  }

  // HUNDREDS. Need to have edge case for if there is nothing in hundreds place.
  const hundredsMatch = romans.filter(el => hundreds === el.number);
  let hundredsString;
  if (hundredsMatch[0]) {
    hundredsString = hundredsMatch[0].roman;
  } else {
    hundredsString = '';
  }

  // TENS. Need to have edge case for if there is nothing in tens place.
  const tensMatch = romans.filter(el => tens === el.number);
  let tensString;
  if (tensMatch[0]) {
    tensString = tensMatch[0].roman;
  } else {
    tensString = '';
  }

  // ONES. Need to have edge case for if there is nothing in ones place.
  const onesMatch = romans.filter(el => ones === el.number);
  let onesString;
  if (onesMatch[0]) {
    onesString = onesMatch[0].roman;
  } else {
    onesString = '';
  }

  // // once have symbol for each level, combine them all into one final string and return that string
  const finalStr = thousandsString + hundredsString + tensString + onesString;
  return finalStr;
}

// convertToRoman(2014);
// convertToRoman(114);
// convertToRoman(3134);
convertToRoman(2143);

// THE BELOW IS THE LONG WAY. CONSIDER TRYING TO MATCH OBJECT KEYS AND VALUES INSTEAD.
// let thousandsString = '';
// if (thousands >= 1) {
//   // go through thousands as many times as its value (e.g., if 4, 4 times) and add the symbol to the string
//   for (let i = 1; i <= thousands; i++) {
//     thousandsString += 'M';
//   }
// }

// // going to be different for hundreds after 400
// let hundredsString = '';
// if (hundreds >= 1 && hundreds <= 3) {
//   // go through thousands as many times as its value (e.g., if 4, 4 times) and add the symbol to the string. AS ITS WRITTEN NOW WILL ONLY WORK FOR 100, 200, and 300
//   for (let i = 1; i <= hundreds; i++) {
//     hundredsString += 'C';
//   }
// } else if (hundreds === 4) {
//   hundredsString += 'CD';
// }
