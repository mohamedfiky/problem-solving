/*
    Link: https://leetcode.com/problems/counter-ii/

    Description:

        Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

        The three functions are:

            increment() increases the current value by 1 and then returns it.
            decrement() reduces the current value by 1 and then returns it.
            reset() sets the current value to init and then returns it.

        

        Example 1:

        Input: init = 5, calls = ["increment","reset","decrement"]
        Output: [6,5,4]
        Explanation:
        const counter = createCounter(5);
        counter.increment(); // 6
        counter.reset(); // 5
        counter.decrement(); // 4

        Example 2:

        Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
        Output: [1,2,1,0,0]
        Explanation:
        const counter = createCounter(0);
        counter.increment(); // 1
        counter.increment(); // 2
        counter.decrement(); // 1
        counter.reset(); // 0
        counter.reset(); // 0




*/


var createCounter = function(init) {
    
    let num = init;

    function add(val){
         return num += val;
    }

    return{
        increment : function(){
            // console.log(init, "increase");
            return add(1);
        },
        decrement : function(){
            // console.log(init, "decrease");
            return add(-1);
        },
        reset : function(){
            // console.log(init, "reset");
            num = init;
            return init;
        }
    }
};

let counter = createCounter(7);

console.log(counter.increment()); // 8
console.log(counter.increment()); // 9
console.log(counter.reset());     // 7
console.log(counter.decrement()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset());     // 7
console.log(counter.increment()); // 8


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
