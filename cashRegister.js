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

  // Set up basic object to return status and change
  const statusObject = {
    status: '',
    change: [],
  };

  // call cashInDrawlTotal function using cid to determine total amount availble in drawer based on argument provided
  const totalCid = cashInDrawerTotal(cid);

  // if totalCid is less than changeDue, update statusObject to state insufficient funds
  if (totalCid < changeDue) {
    statusObject.status = 'INSUFFICIENT_FUNDS';
    statusObject.change = [];
  } else if (totalCid === changeDue) {
    statusObject.status = 'CLOSED';
    statusObject.change = cid;
  } else if{
    // insert test to check if don't have exact change
  } else {
      //insert rest to show cash register open and change
  }

  return statusObject;
}

checkCashRegister(19.5, 20, [
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

checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
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
