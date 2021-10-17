let startTime = Date.now();

function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  
  // Write your code below:
  async function withAsync(num) {
    if (num === 0) {
      return 'zero';
    } else {
      return 'not zero';
    }
  }
  
  // Leave this commented out until step 3:
  
  withAsync(100)
    .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })
  


  async function Async() {
      let resolvedValue = await withConstructor(5);
      console.log(` Value returned from the constructor: ${resolvedValue}`);
  }

  Async();



  let finishTime = Date.now();
  let totalExecutionTime = finishTime - startTime;
  console.log(` Total execution time: ${totalExecutionTime}`);
   