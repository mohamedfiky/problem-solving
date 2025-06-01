/*
    Link: https://www.codewars.com/kata/5a9a70cf5084d74ff90000f7

    Description:

      You are given two positive integers a and b (a < b <= 20000).
      Complete the function which returns a list of all those numbers
      in the interval [a, b) whose digits are made up of prime numbers
      (2, 3, 5, 7) but which are not primes themselves.

      Be careful about your timing!

      Good luck :)


*/


function notPrimes(a,b){
  
  let result = [];

  if( a >= b || b > 20000){
    return;
  }

function isPrime(n){
  if (n < 2){
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0){
      return false;
    }
  }

  return true;

};

  for(let num = a; num < b; num++ ){
    let strNumArr = String(num).split("");

    if(
      !strNumArr.includes("0") && 
      !strNumArr.includes("1") && 
      !strNumArr.includes("4") && 
      !strNumArr.includes("6") && 
      !strNumArr.includes("8") &&
      !strNumArr.includes("9")
    ){
      if(!isPrime(num)){
        result.push(num);        
      }
    }
  }
  
  return result;
}

///////////////////////////////

console.log(notPrimes(2,222));
console.log(notPrimes(2700,3000));
console.log(notPrimes(500,999));

/////////////////////////////////
  