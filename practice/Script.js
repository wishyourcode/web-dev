// module pattern IIFE
let bank = (function () {
  let bankbalance = 12000;
  function checkBalance() {
    console.log("Current Bank Balance : " + bankbalance);
  }
  function setBalance(val) {
    bankbalance = val;
    console.log("Current Bank Balance : " + bankbalance);
  }
  function withDraw(val) {
    if (val < bankbalance) {
      bankbalance -= val;
      console.log("Current Bank Balance : " + bankbalance);
    } else {
      console.log("You dont have this much money");
    }
  }
  return {
    checkBalance,
    setBalance,
    withDraw,
  };
})();

bank.checkBalance();
bank.withDraw(1000);

// revealing module
let Bank = (function () {
  let bankbalance = 12000;
  function checkBalance() {
    console.log("Current Bank Balance : " + bankbalance);
  }
  function setBalance(val) {
    bankbalance = val;
    console.log("Current Bank Balance : " + bankbalance);
  }
  function withDraw(val) {
    if (val < bankbalance) {
      bankbalance -= val;
      console.log("Current Bank Balance : " + bankbalance);
    } else {
      console.log("You dont have this much money");
    }
  }
  return {
    check: checkBalance,
    blance: setBalance,
    draw: withDraw,
  };
})();

Bank.check();
Bank.draw(1000);
