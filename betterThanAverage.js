// You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // reduce to sum up the elements
  let sum = classPoints.reduce((acc, val) => acc + val, 0);
  
  // find the average including your points in class points
  let avg = (sum + yourPoints) / (classPoints.length + 1);
  
  // compare yourPoints to avg
  if (yourPoints > avg)
    return true;
  else return false;
}
