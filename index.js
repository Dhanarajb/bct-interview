// Two arrays, 1,2,3,4,5 
// and 2,3,1,0,5 find which number is not present in the second array

let arr1 = [1,2,3,4,5];
let arr2 = [2,3,1,0,5];

function findArray(arr1,arr2){
  const missingNum = arr1.filter(num=>!arr2.includes(num))
  return missingNum
}

const result = findArray(arr1,arr2)
console.log(result)