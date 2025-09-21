/*
    Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0

    Description:

        Write an algorithm that takes an array and moves all of the zeros to the end,
        preserving the order of the other elements.

      moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/



function moveZeros(arr) {

  let resultArr = [];

  for(let i = 0 ; i < arr.length; i++){

    if(arr[i] !== 0){ // !== to add false and null as written and don't consider them as 0 ;
      
      if(!resultArr.includes(0)){
        resultArr.push(arr[i]);

      }else{
        resultArr.splice(resultArr.indexOf(0),0,arr[i]);
      }

    }else{
      resultArr.push(0);
    }
  }

  return resultArr;
}


///////////////////////////////


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros([1,2,0,0,1,3,0,100,0,19]));

  