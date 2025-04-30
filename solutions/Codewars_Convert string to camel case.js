/*
    Link: https://www.codewars.com/kata/517abf86da9663f1d2000003

    Description:

      Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
      Examples

      "the-stealth-warrior" gets converted to "theStealthWarrior"

      "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

      "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



*/


function toCamelCase(str){
  let arr = str.split(/[-_]+/);
  let camel_Cased_Arr = [];
  for(let word of arr){
  
      // https://www.lookuptables.com/text/ascii-table

      let first_letter_code = word.charCodeAt(0);
      let new_word;

      if(first_letter_code >= 97 && word != arr[0]){
          let capitalized_letter = String.fromCharCode(first_letter_code - 32); // to convert the letter from small (see above link).
           let word_arr = word.split("");
           word_arr.splice(0,1, capitalized_letter);
           new_word = word_arr.join("");             
           camel_Cased_Arr.push(new_word);
      }else{
          new_word = word ;
          camel_Cased_Arr.push(new_word);
      }       
  };

  let camel_Cased_String = camel_Cased_Arr.join("");
  return camel_Cased_String;
};
  