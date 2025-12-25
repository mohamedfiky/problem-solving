/*
    Link: https://www.codewars.com/kata/52449b062fb80683ec000024

    Description:

      The marketing team is spending way too much time typing in hashtags.
      Let's help them with our own Hashtag Generator!

    Here's the deal:

      It must start with a hashtag (#).
      All words must have their first letter capitalized, and remaining letters lowercased.

      If the final result is longer than 140 chars it must return false.
      If the input or the result is an empty string it must return false.

    Examples

      " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
      "    Hello     World   "                  =>  "#HelloWorld"
      ""                                        =>  false

*/




function generateHashtag (str) {

    if (str.length == 0 || str.trim().length == 0){
        return false;
    };

    

    let trimmedSplittedArr = str.trim().split(" ");

    let wordsArr = [];
    let joinedWordsArr;
    
    for(let i = 0; i < trimmedSplittedArr.length; i++){


        // check if the word != "      " to exclude empty strings (white spaces) from the middle of the string;
        if(trimmedSplittedArr[i].trim().length != 0){

            let word = trimmedSplittedArr[i].toLowerCase();
            let charArr = word.split("");
    
            let firstLetterCapitalized = charArr[0].toUpperCase();
            charArr.shift();
            let capitalizedWord = `${firstLetterCapitalized}${charArr.join("")}`;
            wordsArr.push(capitalizedWord);
            joinedWordsArr = wordsArr.join("");
        }

    }
    
    let hashtag = `#${joinedWordsArr}`;
    if(hashtag.length > 140){
        return false;
    };

    return hashtag;

}


///////////////////////////////

console.log(generateHashtag(""));
console.log(generateHashtag("    "));
console.log(generateHashtag("fiky"));
console.log(generateHashtag("mohamed fiky frontend developer"));
console.log(generateHashtag("mohamed fiky    frontend developer"));
console.log(generateHashtag(" Hello wOrLd !!! "));
console.log(generateHashtag("aaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbb_140"));
console.log(generateHashtag("aaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbbbbbbbccccccccccaaaaaaaaaabbbbb_>140"));
