/*
    Link: https://leetcode.com/problems/chunk-array/

    Description:

        Given an array arr and a chunk size size, return a chunked array.

        A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

        Please solve it without using lodash's _.chunk function.

        

        Example 1:

        Input: arr = [1,2,3,4,5], size = 1
        Output: [[1],[2],[3],[4],[5]]
        Explanation: The arr has been split into subarrays each with 1 element.

        Example 2:

        Input: arr = [1,9,6,3,2], size = 3
        Output: [[1,9,6],[3,2]]
        Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

        Example 3:

        Input: arr = [8,5,3,2,6], size = 6
        Output: [[8,5,3,2,6]]
        Explanation: Size is greater than arr.length thus all elements are in the first subarray.

        Example 4:

        Input: arr = [], size = 1
        Output: []
        Explanation: There are no elements to be chunked so an empty array is returned.



*/


var chunk = function(arr, size) {
    let result = [];
    let tempArr= [];

    for(let i = 0; i < arr.length; i++){
      tempArr.push(arr[i]);
      if(tempArr.length == size){
        result.push(tempArr);
        tempArr = [];
      }else if(tempArr.length < size && i == arr.length-1){
        result.push(tempArr);
      }
    }

    return result;
};


///////////////////////////////

console.log(chunk([1,2,3,4,5], 2));
console.log(chunk([1,2,3,4,5], 10));
console.log(chunk([], 1));