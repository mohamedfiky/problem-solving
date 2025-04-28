/*
    Link: https://www.codewars.com/kata/526d42b6526963598d0004db

    Description:

      Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

      For example:

      var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
      c.encode('Codewars'); // returns 'HTIJBFWX'
      c.decode('BFKKQJX'); // returns 'WAFFLES'

      If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
      The shift will always be in range of [1, 26].


*/


var CaesarCipher = function (shift) {

  this.all_letters_twice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
                            "r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h",
                            "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  this.encode = function(str){

      if(shift < 1 || shift > 26){
          return 0;
      }

      let all_letters_twice= this.all_letters_twice;
      let lowerCased_str = str.toLowerCase();
      let arr= [];

      for(let i = 0; i < lowerCased_str.length; i++){

          // console.log(lowerCased_str[i]);
          // console.log(all_letters_twice.indexOf(lowerCased_str[i]));
          // console.log(all_letters_twice[shift + all_letters_twice.indexOf(lowerCased_str[i])]);

          if(all_letters_twice.indexOf(lowerCased_str[i]) == -1){
              arr.push(lowerCased_str[i]);
          }else{
              arr.push(all_letters_twice[shift + all_letters_twice.indexOf(lowerCased_str[i])]);
          } 
      }
      console.log(arr.join("").toUpperCase());
      return arr.join("").toUpperCase()

  };
  
  this.decode = function(str){

      if(shift < 1 || shift > 26){
          return 0;
      }

      let all_letters_twice= this.all_letters_twice;
      let lowerCased_str = str.toLowerCase();
      let arr= [];
      
      for(let i = 0; i < lowerCased_str.length; i++){

          // console.log(lowerCased_str[i]);
          // console.log(all_letters_twice.lastIndexOf(lowerCased_str[i]));
          // console.log(all_letters_twice[all_letters_twice.lastIndexOf(lowerCased_str[i]) - shift]);

          if(all_letters_twice.lastIndexOf(lowerCased_str[i]) == -1){
              arr.push(lowerCased_str[i]);
          }else{
              arr.push(all_letters_twice[all_letters_twice.lastIndexOf(lowerCased_str[i]) - shift]);
          } 
      }
      console.log(arr.join("").toUpperCase());
      return arr.join("").toUpperCase()

  };
  
};
  