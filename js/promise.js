// // 🔹 1. Callback Hell Example
// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 done");
//     callback("Result 1");
//   }, 1000);
// }

// function task2(input, callback) {
//   setTimeout(() => {
//     console.log("Task 2 done with", input);
//     callback("Result 2");
//   }, 1000);
// }

// function task3(input, callback) {
//   setTimeout(() => {
//     console.log("Task 3 done with", input);
//     callback("Result 3");
//   }, 1000);
// }

// // Nested callbacks (callback hell 😵)
// task1(result1 => {
//   task2(result1, result2 => {
//     task3(result2, result3 => {
//       console.log("All tasks finished:", result3);
//     });
//   });
// });

//🔹 2. Same Example with Promises

function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve("Result 1");
    }, 1000);
  });
}

function task2(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 2 done with", input);
      resolve("Result 2");
    }, 1000);
  });
}

function task3(input) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 3 done with", input);
      resolve("Result 3");
    }, 1000);
  });
}

// // // Chain with .then()
// task1()
//   .then(result1 => task2(result1))
//   .then(result2 => task3(result2))
//   .then(result3 => {
//     console.log("All tasks finished:", result3);
//   })
//   .catch(error => console.error(error));



// 🔹 3. Even Cleaner with async/await

async function runTasks() {
  try {
    let result1 = await task1();
    let result2 = await task2(result1);
    let result3 = await task3(result2);
    console.log("All tasks finished:", result3);
  } catch (error) {
    console.error(error);
  }
}

runTasks();
