/*
    Link: https://www.codewars.com/kata/525f47c79f2f25a4db000025

    Description:

        Write a function that accepts a string, and returns true if it is in the form of a phone number.
        Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

        Only worry about the following format:
        (123) 456-7890 (don't forget the space after the close parentheses)

        Examples:

        "(123) 456-7890"  => true
        "(1111)555 2345"  => false
        "(098) 123 4567"  => false

*/


function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
  
      let arr = phoneNumber.split("");

      // Stupid but working :) 
      // console.log("(123) 456-7890");
      
      if(
        arr.length == 14 
        &&
        !isNaN(
          arr[1],
          arr[2],
          arr[3],
          arr[6],
          arr[7],
          arr[8],
          arr[10],
          arr[11],
          arr[12],
          arr[13])
        &&
        arr[0] == "(" &&
        arr[4] == ")" &&
        arr[5] == " " &&
        arr[9] == "-"
        
      ){
  
        return true ;
      }else{
      
      return false ;
    }
  
  };
  