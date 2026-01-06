// 14. DOM Manipulation – Dynamic UI

// You click a button and dynamically add a new list item to <ul>.
//  Which DOM methods will you use?


<ul id="myList">
  <li>Item 1</li>
</ul>
<button id="addBtn">Add Item</button>

<script>
  const ul = document.getElementById("myList");
  const button = document.getElementById("addBtn");

  button.addEventListener("click", function() {
    const li = document.createElement("li"); // create new li
    li.textContent = "New Item";            // set text
    ul.appendChild(li);                     // add to ul
  });
</script>
