/*
    Link: https://www.codewars.com/kata/5839c48f0cf94640a20001d3

    Description:

      Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

      ['XOOXO',
      'XOOXO',
      'OOOXO',
      'XXOXO',
      'OXOOO'] 

      which represents:

      should return: "Total land perimeter: 24".

      Following input:

      ['XOOO',
      'XOXO',
      'XOXO',
      'OOXX',
      'OOOO']

      which represents:

      should return: "Total land perimeter: 18"


*/

// Answered it with the help of AI. 


function landPerimeter(arr) {
  let perimeter = 0;

  for(let i = 0 ; i < arr.length; i++){
    for(let ch = 0; ch < arr[i].length; ch++){
      if(arr[i][ch] === "X"){

        perimeter += 4;
      ['XOOO', 'XOXO', 'XOXO', 'OOXX', 'OOOO']
        if(arr[i - 1]){
          if(arr[i - 1][ch] === "X"){
            perimeter -= 1;
          }
        }

        if(arr[i + 1]){
          if(arr[i + 1][ch] === "X"){
            perimeter -= 1;
          }
        }

        if(arr[i][ch - 1]){
          if(arr[i][ch - 1] === "X" ){
            perimeter -= 1;
          }
        }

        if(arr[i][ch + 1]){
          if(arr[i][ch + 1] === "X" ){
            perimeter -= 1;
          }
        }

      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}



///////////////////////////////

console.log(landPerimeter(['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']));

console.log(landPerimeter(['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']));
 
 console.log(landPerimeter(["OXOOOX",
 "OXOXOO",
 "XXOOOX",
 "OXXXOO",
 "OOXOOX",
 "OXOOOO",
 "OOXOOX",
 "OOXOOO",
 "OXOOOO",
 "OXOOXX"]));

  