const callback = () => {
  console.log('setTimeout callback context is', this)
}

const ctx1 = {name: 'ctx1'};
const ctx2 = {name: 'ctx2'};

const func = function() {
  console.log('caller context is', this); // ctx1:     ctx2:

  const callback2 = () => {
    console.log('setTimeout callback context is (момент создания стрелочной функции)', this)
  }

  setTimeout(callback);   // window   // ctx1:     ctx2:
  setTimeout(callback2);  // ctx1:     ctx2:
}

func.apply(ctx1);
func.apply(ctx2);
