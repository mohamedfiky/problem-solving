/*
    Link: https://www.freecodecamp.org/learn/daily-coding-challenge/10-22

    Description:

      Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

          Words are separated by a single space.
          Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
          Move all words before and including that word to the end of the sentence and:
              Preserve the order of the words when you move them.
              Make them all lowercase.
              And add a comma and space before them.
          Capitalize the first letter of the new first word of the sentence.
          All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
          Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

      For example, given "You must speak wisely." return "Speak wisely, you must."

    Tests:

        Waiting: 1. wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."
        Waiting: 2. wiseSpeak("You can do it!") should return "Do it, you can!"
        Waiting: 3. wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"
        Waiting: 4. wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."
        Waiting: 5. wiseSpeak("You have much to learn.") should return "Much to learn, you have."


*/


function wiseSpeak(sentence) {
    

    let wise_words = ["have", "must", "are", "will", "can"];
    let sentence_refined = sentence.toLowerCase().trim();
    let punc = sentence_refined[sentence_refined.length - 1]; 
    let sentence_words_arr = sentence_refined.split(" ");
    let word_arr_without_inner_spaces = [];
    
    sentence_words_arr.map(word =>{
        if(word.length > 0){
            word_arr_without_inner_spaces.push(word);
        }
    });
    
    let last_word = word_arr_without_inner_spaces[word_arr_without_inner_spaces.length - 1];
    let last_word_without_punc = last_word.replace(last_word[last_word.length -1], "");

    let final_sentence_words_arr = word_arr_without_inner_spaces.splice(0, word_arr_without_inner_spaces.length -1);
        final_sentence_words_arr.push(last_word_without_punc);

    let switched = [];    

    wise_words.map(word =>{
        let index = final_sentence_words_arr.indexOf(word);
        if(index > -1){

            let first = final_sentence_words_arr.splice(index+1);
            let last = final_sentence_words_arr.toSpliced(index+1);

            let first_first_word = first[0];
            let last_first_word = first[first.length - 1];

            first[0] = first_first_word.replace(first_first_word[0], first_first_word[0].toUpperCase());
            first[first.length - 1] = last_first_word + ",";
            
            switched = first.concat(last);
        }

    });


    let wise_sentence = switched.join(" ") + punc;

    return wise_sentence;

}

    

/////////////////////////////////////////////  


console.log(wiseSpeak("You    must     speak wisely. "))
console.log(wiseSpeak("You can do it!"))
console.log(wiseSpeak("Do you think you will complete this?"))
console.log(wiseSpeak("All your base are belong to us."))

  