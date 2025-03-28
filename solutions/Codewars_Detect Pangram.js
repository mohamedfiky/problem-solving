/*
    Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

    Description:

        A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

        Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.





*/


function isPangram(string){
  
    let all = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    string = string.toLowerCase();
    return all.every(l => string.includes(l));
    /* every 
    بتمشى على كل عنصر فى ال array 
    وتعمل عليه تيست لو كله صح تطلع true 
    لو حتى واحدة بس غلط تطلع false 
    إتعلمت الحل من stackoverflow 
    */
  }
  
  console.log(isPangram("detect pangram"));
  console.log(isPangram("The quick brown fox Jumps over the laZy dog"));
  console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa"));
  console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
  