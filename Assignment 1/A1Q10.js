
// 10. Closures – Secure Counter

// Create a counter function that cannot be directly modified from outside.


function createCounter() {
    let count = 0;
  
    return function () {
      count++;
      return count;
    };
  }
  
  let counter = createCounter();
  
  console.log(counter()); // 1
  console.log(counter()); // 2

  