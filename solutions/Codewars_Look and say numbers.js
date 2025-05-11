/*
    Link: https://www.codewars.com/kata/53ea07c9247bc3fcaa00084d

    Description:

        There exists a sequence of numbers that follows the pattern

            1
            11
            21
            1211
            111221
            312211
            13112221
            1113213211
                .
                .
                .

        Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

        Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.


*/


function lookAndSay(data,len){

  let res_arr = [];
  
  function say(data){ 
    let res = "";
    let count = 1;
    
    for(let n = 0; n < data.length; n++){
      let res_str = "";

      if(data[n] == data[n+1]){
        count ++;
      }else{
        res_str = count.toString() + data[n].toString();
        res = res + res_str
        count = 1;
      }
    }

    return res;
    
  }

  for(let i = 0; i < len; i++){
    res_arr.push(say(data));
    data = say(data);
  }

  return res_arr;
}

console.log(lookAndSay("1", 5));
console.log(lookAndSay("1259", 5));
  