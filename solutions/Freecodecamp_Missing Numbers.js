/*
    Link: https://www.freecodecamp.org/learn/daily-coding-challenge/09-13

    Description:

      Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

        The given array may be unsorted and may contain duplicates.
        The returned array should be in ascending order.
        If no integers are missing, return an empty array.

    Tests:

      1. findMissingNumbers([1, 3, 5]) should return [2, 4].
      2. findMissingNumbers([1, 2, 3, 4, 5]) should return [].
      3. findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
      4. findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
      5. findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
      6. findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].


*/


function findMissingNumbers(arr) {
    let result = [];
    let sortedArr = arr.sort((a,b) => {return a-b});
    let n = sortedArr[sortedArr.length - 1];
    for(let i = 2 ; i < n ; i++){
        if(!arr.includes(i)){
            result.push(i);
        }
    }
  return result;
}


///////////////////////////////

console.log(findMissingNumbers([1, 2, 3, 4, 5]));
console.log(findMissingNumbers([2,1,4,7,3]));
console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));

  