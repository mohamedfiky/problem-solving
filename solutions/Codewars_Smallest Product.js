/*
    Link: https://www.codewars.com/kata/5b6b128783d648c4c4000129

    Description:

      Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.
      Example

      input = [
        [1, 5],
        [2],
        [-1, -3]
      ]

      result = 2

*/


function smallestProduct(arr) {
    
  let newArr = [] ;
  
  for(let i = 0 ; i < arr.length ; i ++){
      
      let sum = 1 ;

      for(let a = 0 ; a < arr[i].length ; a ++){

          sum *= arr[i][a] ;   

      }

      newArr.push(sum);
  }

  return Math.min(...newArr) ;

}
  
console.log(smallestProduct([[7, 8, 3],[1, 3],[-1, -2], [-100]]));
console.log(smallestProduct([[ 8, 3],[1, 3],[-1, -2], [100]]));
console.log(smallestProduct([[7, 8, 3],[10, 3],[-1, -20], [9]]));
  