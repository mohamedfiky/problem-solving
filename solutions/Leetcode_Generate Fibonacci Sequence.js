/*
    Link: https://leetcode.com/problems/generate-fibonacci-sequence/

    Description:

        Write a generator function that returns a generator object which yields the fibonacci sequence.

        The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

        The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

        

        Example 1:

        Input: callCount = 5
        Output: [0,1,1,2,3]
        Explanation:
        const gen = fibGenerator();
        gen.next().value; // 0
        gen.next().value; // 1
        gen.next().value; // 1
        gen.next().value; // 2
        gen.next().value; // 3

        Example 2:

        Input: callCount = 0
        Output: []
        Explanation: gen.next() is never called so nothing is outputted


*/


// It was a new topic for me, I reach the answer with the help of DeepSeek

var fibGenerator = function*() {

    let [a, b] = [0, 1];

    while (true) {
        yield a;
        [a, b] = [b, a + b];
  };



};

const numbers = fibGenerator();

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);