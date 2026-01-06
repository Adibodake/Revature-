// 11. Callback Function – Login Validation

// You validate a user and then redirect them.
//  Implement validation using callback functions.



function validateUser(username, password, callback) {
    if (username === "admin" && password === "1234") {
      callback("Login Successful");
    } else {
      callback("Invalid Credentials");
    }
  }
  
  function redirect(message) {
    console.log(message);
    console.log("Redirecting to dashboard...");
  }
  
  validateUser("admin", "1234", redirect);
  