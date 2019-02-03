// var promise = new Promise(function(resolve, reject) {
//   console.log('Executed immediately, like a constructor.');
//   resolve(); // if success
//   // reject(); // if error
// });
//
// // promise.then(function(data) {
// //   //
// // });
// //
// // promise.catch(function(err) {
// //   //
// // });
//
// // Chained methods trigger on resolve/reject
// promise.then(function(data) {
//   console.log('Excecuted on success');
// }).catch(function(err) {
//   console.log('Executed on error');
// });

var timer = function(length) {
  return new Promise(function(resolve, reject) {
    console.log('Init Promise');
    setTimeout(function() {
      console.log('Timeout done');
      resolve();
    }, length);
  });
};

timer(4000).then(function() {
  console.log('Timer has concluded');
});
