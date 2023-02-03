
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

//3-3 everyLoop(array, test) and 3-4. everySome(array, test)

//create loop and test conditions as well as iteration
export function everyLoop(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

export function everySome(array, test) {
  return !array.some(element => !test(element));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true