    // Example 1: Global context
    function example1() {
      document.getElementById("output1").textContent = this; 
    }

    // Example 2: Inside object method
    function example2() {
      let person = {
        name: "Amira",
        greet: function() {
          return "Hi, I'm " + this.name;
        }
      };
      document.getElementById("output2").textContent = person.greet();
    }

    // Example 3: Regular function
    function example3() {
      function showThis() {
        return this;
      }
      document.getElementById("output3").textContent = showThis();
    }

    // Example 4: Arrow function
    function example4() {
      let obj = {
        value: 100,
        arrow: () => this.value
      };
      document.getElementById("output4").textContent = obj.arrow();
    }

    // Example 5: Event listener
    document.getElementById("btn").addEventListener("click", function() {
      document.getElementById("output5").textContent = "this = " + this.tagName;
    });
