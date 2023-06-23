function log(text) {
  return () => {
    console.log(text);
  }
}

log(1)();

setTimeout(log(2), 0);

new Promise((res) => {
  log(3)();
  setTimeout(log(4), 0);
  res();
}).then(() => {
  log(5)();
  setTimeout(log(6), 0);
});

log(7)();