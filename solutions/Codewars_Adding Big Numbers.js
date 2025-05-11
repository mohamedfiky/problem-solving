/*
    Link: https://www.codewars.com/kata/525f4206b73515bffb000b21

    Description:

        We need to sum big numbers and we require your help.

        Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
        Example

        add("123", "321"); -> "444"
        add("11", "99");   -> "110"

        Notes

            The input numbers are big.
            The input is a string of only digits
            The numbers are positives


*/

// Answered it with the help of AI. 


function add(a, b) {

    // prefect answer but needs modern JavaScript ES2020 => Node.js v10.4.0 or higher (but ideally v12+)
    // return (Number(a) + Number(b)).toString(); // Fix me!
    // return (BigInt(a) + BigInt(b)).toString(); // Fixed!

    // Manual solution, even simpler :


  // Add 000 to the left of the shorter string to make them both the same length

  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let res = '';
  let carry = 0; // ومعانا الواحد ومعانا الإتنين , بتاعة الجمع

  // Start from the rightmost digit 
  // بتجمع من اليمين يا غبى حتى لو بالإنجليزى 

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry; // + for math addition
    res = (sum % 10) + res; // + for string Concatination, res starts with "" not 0
    carry = Math.floor(sum / 10);
  }

  // check if there is still a carry left, add it
  if (carry) {
    res = carry + res;  // + for string Concatination, res is string not number
  }

  return res;
}


console.log(add('345', '896')); // so you can understand how the function works.

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));


////////////////////////////////////////////////////

// OR

////////////////////////////////////////////////////


function add(a, b) {

    // prefect answer but needs modern JavaScript ES2020 => Node.js v10.4.0 or higher (but ideally v12+)
    // return (Number(a) + Number(b)).toString(); // Fix me!
    // return (BigInt(a) + BigInt(b)).toString(); // Fixed!

    // Manual solution :

    let res = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? +a[i] : 0;
        const digitB = j >= 0 ? +b[j] : 0;
        const sum = digitA + digitB + carry;
        
        res = (sum % 10) + res;
        carry = Math.floor(sum / 10);
        
        i--;
        j--;
    }

    return res;

}

console.log(add('345', '896')); // so you can understand how the function works.

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));

  