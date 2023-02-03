
// 3-1

let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(arr){
  return arr.reduce((cur, next) => cur.concat(next), [])
}

console.log(flattening(arrays))


// 3-2
//value is the starting value that will be incremented/decremented
//test is the condition statement
//update is the incremental / decremental operation
//body is whats to be done while the loop is looping

export function loop(value, test, update, body) { 
  for (value; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// 3-3

function everyLoop(array, test) 
{
  // Your code here.
}

function everySome(array, test) 
{
//
}