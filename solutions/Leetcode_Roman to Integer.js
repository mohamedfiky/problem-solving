/*
    Link: https://leetcode.com/problems/roman-to-integer/

    Description:

        Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000

        For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

            I can be placed before V (5) and X (10) to make 4 and 9. 
            X can be placed before L (50) and C (100) to make 40 and 90. 
            C can be placed before D (500) and M (1000) to make 400 and 900.

        Given a roman numeral, convert it to an integer.

        

        Example 1:

        Input: s = "III"
        Output: 3
        Explanation: III = 3.

        Example 2:

        Input: s = "LVIII"
        Output: 58
        Explanation: L = 50, V= 5, III = 3.

        Example 3:

        Input: s = "MCMXCIV"
        Output: 1994
        Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




*/


var romanToInt = function(s) {

    if(s.length < 1 || s.length > 15){
      return ;
    }

    let str_arr = s.split("");
    let int_sum = 0;

    for(let i = 0; i < str_arr.length; i++){

      if(str_arr[i] == "I"){
        if(str_arr[i+1] == "V"){
          int_sum += 4;
        }else if(str_arr[i+1] == "X"){
          int_sum += 9;
        }else{
          int_sum += 1;
        }
      }

      if(str_arr[i] == "X"){
        if(str_arr[i-1] == "I"){
          int_sum += 0;
        }else if(str_arr[i+1] == "L"){
          int_sum += 40;
        }else if(str_arr[i+1] == "C"){
          int_sum += 90;
        }else{
          int_sum += 10;
        }
      }

      if(str_arr[i] == "C"){
        if(str_arr[i-1] == "X"){
          int_sum += 0;
        }else if(str_arr[i+1] == "D"){
          int_sum += 400;
        }else if(str_arr[i+1] == "M"){
          int_sum += 900;
        }else{
          int_sum += 100;
        }
      }

      if(str_arr[i] == "V"){
        if(str_arr[i-1] == "I"){
          int_sum += 0;
        }else{
          int_sum += 5;
        }
      }

      if(str_arr[i] == "L"){
        if(str_arr[i-1] == "X"){
          int_sum += 0;
        }else{
          int_sum += 50;
        }
      }

      if(str_arr[i] == "D"){
        if(str_arr[i-1] == "C"){
          int_sum += 0;
        }else{
          int_sum += 500;
        }
      }

      if(str_arr[i] == "M"){
        if(str_arr[i-1] == "C"){
          int_sum += 0;
        }else{
          int_sum += 1000;
        }
      }
      
    }
    
    return int_sum;
    
  };

  console.log(romanToInt("III"));
  console.log(romanToInt("LVIII"));
  console.log(romanToInt("MCMXCIV"));

  console.log(romanToInt("CCXIII"));
  console.log(romanToInt("MMMCDLXVI"));
  console.log(romanToInt("MMMCCXLIX"));