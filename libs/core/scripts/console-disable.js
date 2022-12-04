if (typeof ngDevMode === 'undefined' || ngDevMode) {
  console.warn('Console output is disable in production.');
  console.debug = function () {};
  console.info = function () {};
  console.log = function () {};
  console.table = function () {};
  console.time = function () {};
  console.timeEnd = function () {};
  console.timeStamp = function () {};
  console.warn = function () {};
}
