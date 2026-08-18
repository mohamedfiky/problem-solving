/*
    Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023

    Description:

      Enough is enough!

      Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
      He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

      Task

      Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
      For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
      With list [20,37,20,21] and number 1, the result would be [20,37,21]. 


*/




function deleteNth(arr,n){

    for(let i = 0; i < arr.length; i++){

        // console.log( "____outer for loop____", i , arr)
        let count = 1;
        // let splices_count = 0; 

        for(let s = i + 1; s < arr.length ; s++){

            // console.log( "inner for loop", s , arr[s] , arr)

            if(arr[i] == arr[s]){
                count += 1;
            }

            if (count > n) {
                arr.splice(s, 1);
                // splices_count += 1 ;
                // console.log("------------ SPLICED -------------", splices_count);
                count -= 1;
                // i -= 1 ;    => the s not the i idiot i is not affected as the change on the array is next to it .
                s -= 1 ;
            }
 
        }
    }

    return arr ;

}


///////////////////////////////


console.log(deleteNth([37,37,20,37,20,21,37,15,20,14], 2));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([12,39,19,39,39,19,12], 1));
console.log(deleteNth([30,47,40,30,30,22,15,18,15,40,22,18,15,22,22,40,30,15,22,40,15,40,40,47,18,47,22,22,40,15,47,40,22,22,40,30,40,30,48,30,22,47,18], 6));


  