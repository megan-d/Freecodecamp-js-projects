// Create separate function to total the cash in drawer amount
const cashInDrawerTotal = function(cid) {
  // Make new array of just the value (second element from each element in cid array)
  const cidArray = [];
  cid.forEach(el => {
    cidArray.push(el[1]);
  });
  // Total the value with reduce
  const reduced = cidArray.reduce((a, b) => a + b);
  // Round the total value
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

  // Create object for values of each bill/coin
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
  // Define separate variable for cid array and reverse to have highest values first
  const drawer = [...cid].reverse();
  // Add value for each bill/coin denomination as third element in each array
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
    statusObject.status = 'INSUFFICIENT_FUNDS';
    statusObject.change = [];
    // If totalCid is equal to changeDue, update statusObject to state closed and change is cid
  } else if (totalCid === changeDue) {
    statusObject.status = 'CLOSED';
    cid.forEach(el => el.splice(-1, 1));
    statusObject.change = cid;
  } else {
    // If change can be provided, update status object with change due in coins and bills, sorted in highest to lowest order
    // Define total variable to keep track of total for each denomination and changeOwed variable to be updated
    // Also define finalTotal variable to be used to determine if exact change can be provided.
    let changeOwed = changeDue;
    let total;
    let finalTotal = 0;
    // Loop through each element of the drawer array
    for (let i = 0; i < drawer.length; i++) {
      // Reset total to 0 with each iteration
      total = 0;
      // While the amount of each denomination (e.g., $20) can go into changeDue and the drawer still has some of that denomination available, continue to take out that denomination from biggest to smallest
      while (drawer[i][2] <= changeOwed && drawer[i][1] !== 0) {
        // While the value of each denomination (drawer[i][2]) can go into the total available for that denomination (drawer[i][1]), continue to do so. Deduct denomination each time from total for that denomination (drawer[i][1] - drawer[i][2]). Keep track of total for that denomination and up it by denomination each time pass through (e.g, 20, 40, 60). Update changeOwed each time by subtracting the denomination each time (and round).
        while (drawer[i][2] <= drawer[i][1] && drawer[i][2] <= changeOwed) {
          total += drawer[i][2];
          drawer[i][1] -= drawer[i][2];
          changeOwed = Math.round(changeOwed * 100) / 100 - drawer[i][2];
        }
        // Push the name of denomination and the total amount for that denomination into change array
        statusObject.change.push([drawer[i][0], total]);
        // Update final total, which states the total amount in change array for all denominations
        finalTotal += total;
      }
    }
    // Round final total of change
    const roundedTotal = Math.round(finalTotal * 100) / 100;
    // If the total amount resulting from the above calculations is not equal to the change that is due, status is insufficient funds and empty array (can't provide exact change). Otherwise, status is open and change is what has already been pushed into change array.
    if (roundedTotal !== changeDue) {
      statusObject.status = 'INSUFFICIENT_FUNDS';
      statusObject.change = [];
    } else {
      statusObject.status = 'OPEN';
    }
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
