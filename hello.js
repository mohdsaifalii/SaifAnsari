const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Asyn Task 1");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise Consumed");
});
