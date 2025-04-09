/*
    Link: https://www.codewars.com/kata/5264d2b162488dc400000001

    Description:

        Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

        Examples:

        "Hey fellow warriors"  --> "Hey wollef sroirraw" 
        "This is a test        --> "This is a test" 
        "This is another test" --> "This is rehtona test"




*/


function spinWords(string){

  let str_arr = string.split(" ");

  str_arr.forEach((word, index)=>{

      if(word.length >= 5){

          let reversed_word = "";

          for(let i = word.length-1; i >= 0; i--){
              reversed_word += `${word[i]}` ;
          };

          console.log(reversed_word);
          str_arr.splice(index, 1, reversed_word);
      }
  });

  let result_string = str_arr.join(" ");

  return result_string ;
}