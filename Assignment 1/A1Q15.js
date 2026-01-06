// 15. Event Listeners – Form Validation

// A form should display an error message when submitted without input.
//  Explain how addEventListener() helps.


<form id="myForm">
  <input type="text" id="username" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>
<p id="errorMsg" style="color:red;"></p>

<script>
  const form = document.getElementById("myForm");
  const input = document.getElementById("username");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting
    if (input.value === "") {
      errorMsg.textContent = "Please enter a name!";
    } else {
      errorMsg.textContent = "";
      alert("Form submitted!");
    }
  });
</script>
