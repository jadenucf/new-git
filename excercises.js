
// 3-1

let arrays = [[1, 2, 3], [4, 5], [6]];

export function flattening(arr){
  return arr.reduce((cur, next) => cur.concat(next), [])
}

console.log(flattening(arrays))


// 3-2

export function loop(value, test, update, body) { //value is the start value, test is a function that returns a boolean, update returns a new value for next iteration, body logs it
  for (let currentValue = value; test(currentValue); currentValue = update(currentValue)) {
    body(currentValue);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);