/*
    Link: https://www.codewars.com/kata/55d5434f269c0c3f1b000058

    Description:

        Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

        If this isn't the case, return 0.
        Examples

        451999277, 41177722899 -->  1 // num1 has straight triple 999s and num2 has straight double 99s
        1222345, 12345 -->  0 // num1 has straight triple 2s but num2 has only a single 2
        12345, 12345 -->  0
        888, 77 --> 0 // num1 has three '8's, num2 has 2 '7's, but they are not the same digit
        88888, 88888   --> 1 // more than 3 or 2 repetitions also count 
        123123123, 123 --> 0 // '123' is not a single digit


*/


function tripledouble(num1, num2) {
    //code me

    let arr1 = Array.from(num1.toString()) ;
    let arr2 = Array.from(num2.toString()) ;


    for(let i = 0 ; i < arr1.length ; i++){
        if(arr1[i] == arr1[i + 1] && arr1[i] == arr1[i + 2] ){
            let x = parseInt(arr1[i]) ;
            for(let s = 0 ; s < arr2.length ; s++){
                if(arr2[s] == arr2[s + 1] && arr2[s] == x ){
                    return 1 ;
                }
                
            }
            
        }
    }
    
    return 0 ;
    
}

console.log(tripledouble(122333435, 133333322435));
console.log(tripledouble(1222435, 13333332435));
  