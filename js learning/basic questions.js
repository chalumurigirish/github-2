
1st question- 
Count of Divisible Numbers
Count how many numbers between 1 and n are divisible by 3 or 5.
 Example: n = 15 → Output: 9


  sol- 
   const n = 15
  let answer = 0
  for(let i=0; i<n; i+=1){

    const isdivisibleby3 = i % 3
    const isdivisibleby5 = i % 5

    if(!isdivisibleby3 || !isdivisibleby5){

    
        answer += 1
    }

  }

console.log(answer);


  2nd question-
  Sum of Digits of a Number
Input a number and find the sum of its digits using a for loop and arithmetic operations.
 Example: n = 1234 → Output: 10

sol-
const n = 1234




