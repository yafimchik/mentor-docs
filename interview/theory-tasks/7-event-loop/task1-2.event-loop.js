function log(text) {
  return () => {
    console.log(text);
  }
}

log(1)();

setTimeout(log(2), 1000);

new Promise((res) => {
  log(3)();

  setTimeout(log(4), 1000);

  res();
})
  .then(() => {
    log(5)();

    setTimeout(log(6), 1000);

    new Promise((res) => {
      log(7)();
      setTimeout(log(8), 1000);
      res();
    })
      .then(() => {
        log(9)();
        setTimeout(log(10), 1000);
      });
})
  .then(() => {
    log(11)();

    setTimeout(log(12), 1000);
  });

setTimeout(log(13), 1000);

log(14)();