const ctx1 = {name: 'ctx1'};
const ctx2 = {name: 'ctx2'};

const showContext = () => {
  console.log('context is', this);
}

const showContext1 = showContext.bind(ctx1);
const showContext2 = showContext.bind(ctx2);

showContext1(); // 1:
showContext2(); // 2: