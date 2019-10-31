function convertToRoman(num) {
  // take input number and break it up into thousands, hundreds, tens, and ones. NEED TO FIGURE OUT HOW TO DO THIS FOR 100s and 10s. to get ones place, may need to just select last digit in string
  const thousands = Math.trunc(num / 1000);
  const hundreds = Math.trunc((num % 1000) / 100);
  const tens = num / 10;
  const ones = num
    .toString()
    .split('')
    .pop();

  console.log(thousands);
  console.log(hundreds);

  let thousandsString = '';
  if (thousands >= 1) {
    // go through thousands as many times as its value (e.g., if 4, 4 times) and add the symbol to the string
    for (let i = 1; i <= thousands; i++) {
      thousandsString += 'M';
    }
  }

  // going to be different for hundreds after 400
  let hundredsString = '';
  if (hundreds >= 1 && hundreds <= 3) {
    // go through thousands as many times as its value (e.g., if 4, 4 times) and add the symbol to the string. AS ITS WRITTEN NOW WILL ONLY WORK FOR 100, 200, and 300
    for (let i = 1; i <= hundreds; i++) {
      hundredsString += 'C';
    }
  } else if (hundreds === 4) {
    hundredsString += 'CD';
  }

  // once have symbol for each level, combine them all into one string
  console.log({ thousandsString });
  console.log({ hundredsString });
  //   return num;
}

convertToRoman(2336);
convertToRoman(2436);

// chart of values. probably better to make a function that loops through the romans array and says if the key equals the value of num, use that roman value.
const romans = [
  {
    num: 1,
    roman: 'I',
  },
  {
    num: 2,
    roman: 'II',
  },
  {
    num: 3,
    roman: 'III',
  },
  {
    num: 4,
    roman: 'IV',
  },
  {
    num: 5,
    roman: 'V',
  },
  {
    num: 6,
    roman: 'VI',
  },
  {
    num: 7,
    roman: 'VII',
  },
  {
    num: 8,
    roman: 'VIII',
  },
  {
    num: 9,
    roman: 'IX',
  },
  {
    num: 10,
    roman: 'X',
  },
  {
    num: 20,
    roman: 'XX',
  },
  {
    num: 30,
    roman: 'XXX',
  },
  {
    num: 40,
    roman: 'XL',
  },
  {
    num: 50,
    roman: 'L',
  },
  {
    num: 60,
    roman: 'LX',
  },
  {
    num: 70,
    roman: 'LXX',
  },
  {
    num: 80,
    roman: 'LXXX',
  },
  {
    num: 90,
    roman: 'XC',
  },
  {
    num: 100,
    roman: 'C',
  },
  {
    num: 200,
    roman: 'CC',
  },
  {
    num: 300,
    roman: 'CCC',
  },
  {
    num: 400,
    roman: 'CD',
  },
  {
    num: 500,
    roman: 'D',
  },
  {
    num: 600,
    roman: 'DC',
  },
  {
    num: 700,
    roman: 'DCC',
  },
  {
    num: 800,
    roman: 'DCCC',
  },
  {
    num: 900,
    roman: 'CM',
  },
  {
    num: 1000,
    roman: 'M',
  },
  {
    num: 2000,
    roman: 'MM',
  },
  {
    num: 3000,
    roman: 'MMM',
  },
  {
    num: 4000,
    roman: 'MMMM',
  },
];
