const ONE_SECOND = 1000;

const fet = (i) => {
  return new Promise((res) =>  {
    setTimeout(() => res(i), ONE_SECOND)
  })
    .then(console.log);
};

arr = [0,1,2,3,4];

async function func() {
  for (let i = 0; i < 5; i += 1) {
    await fet(i);
  }
  console.log('end');
}

func();