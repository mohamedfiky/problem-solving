/*
    Link: https://www.codewars.com/kata/526989a41034285187000de4

    Description:

      Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

      All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
      Examples

      * With input "10.0.0.0", "10.0.0.50"  => return   50 
      * With input "10.0.0.0", "10.0.1.0"   => return  256 
      * With input "20.0.0.10", "20.0.1.0"  => return  246


*/


function ipsBetween(start, end){
  let start_arr = start.split(".");
  let end_arr = end.split(".");
  console.log(start_arr);
  console.log(end_arr);
  let sum = 0;

  if(end_arr[0] - start_arr[0] > 0){
      sum += (end_arr[0] - start_arr[0]) * Math.pow(256,3);
  }


  if(end_arr[1] - start_arr[1] > 0){
      sum += (end_arr[1] - start_arr[1]) * Math.pow(256,2);
  }

  if(end_arr[1] - start_arr[1] < 0){
      sum += (end_arr[1] - start_arr[1]) * Math.pow(256,2);
  }


  if(end_arr[2] - start_arr[2] > 0){
      sum += (end_arr[2] - start_arr[2]) * Math.pow(256,1);
  }

  if(end_arr[2] - start_arr[2] < 0){
      sum += (end_arr[2] - start_arr[2]) * Math.pow(256,1);
  }


  if(end_arr[3] - start_arr[3] > 0){
      sum += (end_arr[3] - start_arr[3]) * Math.pow(256,0);
  }

  if(end_arr[3] - start_arr[3] < 0){
      sum += (end_arr[3] - start_arr[3]) * Math.pow(256,0);
  }

  

  console.log(sum);
  return sum;
}
ipsBetween("1.2.3.4", "5.6.7.8");
  