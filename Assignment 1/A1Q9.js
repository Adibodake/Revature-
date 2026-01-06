
// 9. Function Declaration vs Arrow Function
// Create a function to calculate GST using:
// Function Declaration
// Arrow Function
//  Mention one key difference.


1. Function Declaration
function calculateGST(price) {
    return price * 0.18;
  }
  

  2. Arrow Function

  const calculateGST = (price) => {
    return price * 0.18;
  };

  

Key Difference:

Function Declaration has its own this.

Arrow Function does not have its own this (it uses parent this).
