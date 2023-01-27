///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// my first thought was to first get the individual sums of each array. i did this with a simple loop for each setting the total to a variabl sum1, sum2, sum3. 
let sum1 = 0
for(i=0; i<fujiAcres.length; i++){
    sum1 = sum1 + fujiAcres[i]
}
// console.log(sum1)

let sum2 = 0
for(i=0; i<galaAcres.length; i++){
    sum2 = sum2 + galaAcres[i]
}
// console.log(sum2)

let sum3 = 0
for(i=0; i<pinkAcres.length; i++){
    sum3 = sum3 + pinkAcres[i]  
}
// console.log(sum3)
// i then added the three sums together to for a total sum called total acres. there might have been a shorter way of doing this but this was the first thing i thought of.
let totalAcres = sum1 + sum2 + sum3;
console.log(totalAcres)

// two other ways to do this opperation with less code
// let totalAcres = 0
// for(i = 0; i < 7; i++){
//   totalAcres += fujiAcres[i] + galaAcres[i] = pinkAcres[i]  
// }
// console.log(totalAcres)

// let totalAcres = [...fujiAcres, ... galaAcres, ...pinkAcres]
// console.log(totalAcres.reduce(x,z) => x+z))


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres/7
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


// this one kicked my butt harder than it should have. finally finding the correct form made it easier to figure out
// while (days < 7){   
// console.log(`Day ${days+1} with ${acresLeft} acres left`)
// //i finally realized the = needs to accompany a + or- in some cases
//    acresLeft -= averageDailyAcres
//    days += 1
// }
// this is what the question actually ased to do...
while(acresLeft > 0){
    days++ 
    acresLeft -= averageDailyAcres
} console.log(days)
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE



//using slice method creatinf copys of the tons arrays
// i went in a doozy of the wrong direction... i had set up the plices first thinking that i could modify the original array then slice but realized when i was done that it was wrong and had to go in and change a few thing.
let fujiTons = fujiAcres.slice()
for(i=0; i<fujiTons.length; i++){
    fujiTons[i] *= 6.5
    // console.log(fujiAcres[i])
}
console.log(fujiTons)


let galaTons = galaAcres.slice()
for(i=0; i<galaTons.length; i++){
    galaTons[i] *= 6.5
    // console.log(galaAcres[i])
}
console.log(galaTons)

let pinkTons = pinkAcres.slice()
for(i=0; i<pinkTons.length; i++){
    pinkTons[i] *= 6.5
    // console.log(pinkAcres[i])
}
console.log(pinkTons)
// console.log(pinkAcres) 
// this was a double check that the original array hadnt been changed

// easier and cleaner way to do it. followed along with instructor.
// let fujiTons = fujiAcres.slice()
// let pinkTons = pinkAcres.slice()
// let galaTons = galaAcres.slice()

// console.log(fujiTons, galaTons, pinkTons)

// for(i=0; i<7; i++){
// fujiTons[i] = fujiTons[i] * 6.5
// galaTons[i] = galaTons[i] * 6.5
// pinkTons[i] = pinkTons[i] * 6.5
// }

// console.log(fujiTons, galaTons, pinkTons)




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 



let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(i=0; i<7; i++){
    fujiPounds += fujiTons[i] * 2000
    galaPounds += galaPounds[i] * 2000
    pinkPounds += pinkPounds[i] *2000
}







// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE


let totalProfit = galaProfit + pinkProfit + fujiProfit