
// 8. Array reduce – Cart Total

// Calculate the total price of items in a shopping cart using reduce().


let cart = [500, 1200, 300];

let total = cart.reduce(function(sum, price) {
  return sum + price;
}, 0);

console.log(total);

OP:-
2000

