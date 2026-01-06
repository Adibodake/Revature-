
// 13. Promises & async/await

// Convert this promise-based API call into async/await:

// fetch(url).then(res => res.json()).then(data => console.log(data));


async function fetchData(url) {
    try {
      let res = await fetch(url);       // Wait for the fetch to complete
      let data = await res.json();      // Wait for JSON parsing
      console.log(data);                // Use the data
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the async function
  fetchData("https://api.example.com/data");
  