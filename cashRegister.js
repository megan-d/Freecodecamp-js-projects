// Create function to total the cash in drawer amount so you know if you have enough cid to make change and if the cid is equal to the change due
const cashInDrawerTotal = function(cid) {
  // make new array of just the value (second element from each element in cid array)
  const cidArray = [];
  cid.forEach(el => {
    cidArray.push(el[1]);
  });
  const reduced = cidArray.reduce((a, b) => a + b);
  return Math.round(reduced * 100) / 100;
};

function checkCashRegister(price, cash, cid) {
  const changeDue = cash - price;
  // Here is your change, ma'am.
  // Set up object to return status and change
  const statusObject = {
    status: '',
    change: [],
  };

  // Create object for values of each dollar/coin
  const values = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.05],
    ['PENNY', 0.01],
  ];

  // Call cashInDrawlTotal function using cid to determine total amount availble in drawer
  const totalCid = cashInDrawerTotal(cid);
  console.log({ totalCid });
  console.log({ changeDue });
  // Define separate variable for cid array and reverse to have highest values first
  const drawer = [...cid].reverse();
  // add value for each denomination as third element in each array
  drawer.forEach(function(el) {
    for (let i = 0; i < values.length; i++) {
      if (el[0] === values[i][0]) {
        el.push(values[i][1]);
      }
    }
    return drawer;
  });

  // Update statusObject based on various scenarios that could occur
  if (totalCid < changeDue) {
    // If totalCid is less than changeDue, update statusObject to state insufficient funds
    // NEED TO UPDATE THIS ONE TO ADDRESS IF YOU CANNOT RETURN EXACT CHANGE. MIGHT NEED TO ADD THAT AS ADDITIONAL ELSE IF OR FOLLOW UP TO LAST ONE.
    statusObject.status = 'INSUFFICIENT_FUNDS';
    statusObject.change = [];
    // If totalCid is equal to changeDue, update statusObject to state closed and change is cid
  } else if (totalCid === changeDue) {
    statusObject.status = 'CLOSED';
    cid.forEach(el => el.splice(-1, 1));
    statusObject.change = cid;
  } else {
    // If change can be provided, update status object with change due in coins and bills, sorted in highest to lowest order
    // define total variable to keep track of total for each denomination
    let changeOwed = changeDue;
    let total;
    for (let i = 0; i < drawer.length; i++) {
      total = 0;
      // While the amount of each denomination (e.g., $20) can go into changeDue, continue to take out that denomination from biggest to smallest
      while (drawer[i][2] <= changeOwed && drawer[i][1] !== 0) {
        // While the value of each denomination (drawer[i][2]) can go into the total available for that denomination (drawer[i][1]), continue to do so. Deduct denomination each time from total for that denomination (drawer[i[1] - values[j][1]). Keep track of total for that denomination and up it by denomination each time pass through (e.g, 20, 40, 60).
        while (drawer[i][2] <= drawer[i][1] && drawer[i][2] <= changeOwed) {
          total += drawer[i][2];
          drawer[i][1] -= drawer[i][2];
          changeOwed = Math.round(changeOwed * 100) / 100 - drawer[i][2];
        }
        console.log({ changeOwed });
        statusObject.change.push([drawer[i][0], total]);
        console.log({ statusObject });
      }
    }
    statusObject.status = 'OPEN';
  }

  return statusObject;
}

checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
