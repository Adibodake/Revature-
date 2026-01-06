// 6. Array map – Price Calculation

// An e-commerce site gives 10% discount on all prices.
//  Use map() to create a new discounted price list.


let prices = [1000, 2000, 3000];

let discountedPrices = prices.map(function(price) {
  return price - (price * 10 / 100);
});

console.log(discountedPrices);

OP:-
[900, 1800, 2700]

