
// 3. JSON.parse()

// You receive this API response as a string:

// '{"id":101,"name":"Laptop","price":50000}' 

//Convert it into a JavaScript object and access the name.

let response = '{"id":101,"name":"Laptop","price":50000}';

let product = JSON.parse(response);
console.log(product.name);


OP:-
Laptop
