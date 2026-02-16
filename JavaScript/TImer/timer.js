//task that will be done after 5 seconds
setTimeout(function timer() {
  console.log("timer is done");
}, 5000);

//task that will be done after every 2 seconds
let abcd = setInterval(function timer() {
  console.log("2 second passed");
}, 2000);
//stop the above task after 10 seconds otherwise it will run forever
setTimeout(function stopTimer() {
  clearInterval(abcd);
  console.log("timer stopped");
}, 10000);

//task that will be done after every 3 seconds and stop after 15 seconds
let intervalId = setInterval(function timer() {
  console.log("3 second passed");
}, 3000);
setTimeout(function stopTimer() {
  clearInterval(intervalId, abcd);
  console.log("timer stopped");
}, 15000);
