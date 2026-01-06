// 7. Array filter – Search Feature

// You want to show only available products from a product list.
//  Use filter() to return items with inStock === true.

let products = [
    { name: "Laptop", inStock: true },
    { name: "Mobile", inStock: false },
    { name: "Tablet", inStock: true }
  ];
  
  let availableProducts = products.filter(function(product) {
    return product.inStock === true;
  });
  
  console.log(availableProducts);

  Op:-

  [
    { name: "Laptop", inStock: true },
    { name: "Tablet", inStock: true }
  ]
  
  