    // Example 1
    function example1() {
      setTimeout(() => {
        alert("This message appears after 2 seconds");
      }, 2000);
    }

    // Example 2
    function greet(name) {
      alert("Hello, " + name);
    }
    function example2() {
      setTimeout(greet, 3000, "Amira");
    }

    // Example 3
    function example3() {

      let timeoutId = setTimeout(() => {
        alert("This will NOT show");
      }, 4000);
      clearTimeout(timeoutId);
      alert("Timeout was cleared immediately!");
    }

    // Example 4
    let timeoutId;
    document.getElementById("start").addEventListener("click", () => {
      console.log("Stated")
      timeoutId = setTimeout(() => {
        alert("Time’s up!");
      }, 5000);
    });
    document.getElementById("cancel").addEventListener("click", () => {
      console.log("Ended")
      clearTimeout(timeoutId);
      alert("Timer canceled!");
    });
