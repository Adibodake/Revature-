
// 12. Callback Hell – Payment Processing

// A payment flow involves:

// Validate user

// Process payment

// Generate invoice
//  Explain why nested callbacks become difficult to manage.


function validateUser(user, callback) {
    setTimeout(() => {
      console.log("User validated");
      callback();
    }, 1000);
  }
  
  function processPayment(callback) {
    setTimeout(() => {
      console.log("Payment processed");
      callback();
    }, 1000);
  }
  
  function generateInvoice(callback) {
    setTimeout(() => {
      console.log("Invoice generated");
      callback();
    }, 1000);
  }
  
  // Nested callbacks (Callback Hell)
  validateUser("admin", function() {
    processPayment(function() {
      generateInvoice(function() {
        console.log("Payment flow completed");
      });
    });
  });

  
OP (after 1 second each):-

User validated
Payment processed
Invoice generated
Payment flow completed


