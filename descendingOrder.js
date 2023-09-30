// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return parseInt(
    n.toString()
    .split('')
    .sort()
    .reverse()
    .join('')
  ) 
}

// Input: n = 123
//     n.toString() -> '123'
//     .split('') -> ['1', '2', '3']
//     .sort() -> ['1', '2', '3']
//     .reverse() -> ['3', '2', '1']
//     .join('') -> '321'
//     parseInt('321') -> 321
