/*
    Link: https://www.codewars.com/kata/59ec2d112332430ce9000005

    Description:

      In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

      See test cases for more examples.

      Good luck!


*/


function solve(a,b){

  // A function to get an array of prime factors => from ChatGPT :) 
  function getPrimeFactors(n) {
      let factors = [];
      let divisor = 2;

      while (n >= 2) {
          while (n % divisor === 0) {
              factors.push(divisor);
              n /= divisor;
          }
          divisor++;
      }

      return factors;
  }

  let b_factors_arr = getPrimeFactors(b);

  for(let i = 0; i < b_factors_arr.length; i++){

      if(a % b_factors_arr[i] != 0){
          return false
      }
  }

  return true;

};
  