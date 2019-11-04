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
  let changeDue = cash - price;
  // Here is your change, ma'am.
  // Set up object to return status and change
  const statusObject = {
    status: '',
    change: [],
  };

  // Call cashInDrawlTotal function using cid to determine total amount availble in drawer
  const totalCid = cashInDrawerTotal(cid);
  // Define separate variable for cid array and reverse to have highest values first
  const drawer = [...cid].reverse();

  // Update statusObject based on various scenarios that could occur
  if (totalCid < changeDue) {
    // If totalCid is less than changeDue, update statusObject to state insufficient funds
    // NEED TO UPDATE THIS ONE TO ADDRESS IF YOU CANNOT RETURN EXACT CHANGE. MIGHT NEED TO ADD THAT AS ADDITIONAL ELSE IF OR FOLLOW UP TO LAST ONE.
    statusObject.status = 'INSUFFICIENT_FUNDS';
    statusObject.change = [];
    // If totalCid is equal to changeDue, update statusObject to state closed and change is cid
  } else if (totalCid === changeDue) {
    statusObject.status = 'CLOSED';
    statusObject.change = cid;
  } else {
    // If change can be provided, update status object with change due in coins and bills, sorted in highest to lowest order
    for (let i = 0; i < drawer.length; i++) {
      // Loop through drawer array. While one hundred is less than changeDue, push that amount into change array of statusObject. Subtract 100 from changeDue and continue. Continue for each element of array.
      while (drawer[i][1] <= changeDue) {
        statusObject.change.push(drawer[i]);
        changeDue -= drawer[i][1];
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
