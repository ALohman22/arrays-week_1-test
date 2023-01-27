//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
// consol.loged faveColors to get a baseline in ther terminal to ensure i did in fact make a copy.
// console.log(faveColors)
let colorCopy = faveColors.slice()
console.log(colorCopy)
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
//forgot the quotations around purple and threw a code my first try.... wooops!
colorCopy.push('purple')
console.log(colorCopy)
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
// again console.log for my own sanity!
// console.log(numbers)

//CODE HERE
let middleNums = numbers.splice(1,3)
console.log(middleNums)

//follow along on a diffrent way
// let middleNums = numbers.slice(1,4)
// console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let answers =[]
for(i=0; i<bigOrSmallArray.length; i++)
  if(bigOrSmallArray[i] > 100){
    //did not have to put the {} in...
    answers.push(`${bigOrSmallArray[i]} BIG`)
    // console.log(`${bigOrSmallArray[i]} BIG`)
  } else if (bigOrSmallArray[i] <= 100 )
  // accidentally put an "else" and not an "else if" problem solved!
  // could also just put else. 
    answers.push(`${bigOrSmallArray[i]} small`)
   console.log(answers)
