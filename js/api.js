// Basic GET request
fetch("https://jsonplaceholder.typicode.com/posts") // Example API
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    console.log("Fetched Data:", data); // Use the data here
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });



//==============================================================================================================================


async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch data");
    
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();
