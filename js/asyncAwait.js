// index.html // js --> all js files // css --> css files // assests 
// assets -> js, css
// reserved words --> try catch import export const 
// check call --> function, file(js, css)
// clean code, 1) naming 2)spaces
// debug -->
// ext --> small letters, .html, .css, .js, .json
// base 


// promise based function 
function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
    resolve("Result 1");
    }, 3000);
  });
}

function task2() {
  return new Promise(
    resolve => {
    setTimeout(() => {
        console.log("Task 2 done with");
      resolve("Result 2");
    }, 3000);
  });
}


//await must be wrapped in async function 
async function trytrytry(){
    let result1 = await task1();
    let result2 = await task2();
    console.log(result1)
    console.log(result2)
}
trytrytry()
console.log(task1())