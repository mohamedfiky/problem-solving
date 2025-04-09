/*
    Link: https://www.codewars.com/kata/526dbd6c8c0eb53254000110

    Description:

        In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

        The string has the following conditions to be alphanumeric:

            At least one character ("" is not valid)
            Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
            No whitespaces / underscore

*/


function alphanumeric(string){

  if(!string || string.indexOf("_") != -1){

      return false ;

  }else{

      let patern = /[^A-z0-9]/;
      let result = patern.test(string);
      return !result ;
  }

}
  
console.log(alphanumeric("_"));
console.log(alphanumeric("w"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("   "));
console.log(alphanumeric(""));

//////////////// OR ////////////////////

function alphanumeric(string){
  //your code here
  if(string){

      if(string.indexOf("_") != -1){
          return false;
      }

      let result = string.match(/[^A-z]/g);
      
      if(result != null){

          let res2 = result.join("").match(/[^0-9]/g);

          if (res2 != null){

              return false;

          }else{

              return true;
          }

      }else{

          return true;
      }

  }

return false;

}
  
console.log(alphanumeric("_"));
console.log(alphanumeric("w"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("   "));
console.log(alphanumeric(""));
  