const ONE_SECOND = 1000;

const showWithDelay = (i) => {
  return new Promise((res) =>  {
    setTimeout(() => res(i), ONE_SECOND)
  })
    .then(console.log);
};

arr = [0, 1, 2, 3, 4];

async function func() {
  await arr.forEach(async (value) => {
    await showWithDelay(value);
  });
  console.log('end');
}

func();