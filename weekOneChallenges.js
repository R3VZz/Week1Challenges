//// challenge 1 - display breakfast, lunch and dinner to console
// create function with 3 parameters, one for each meal
let food = ( breakfast, lunch, dinner ) =>
{   
    // output the meals to the console in the following string
    console.log( `For breakfast i had ${breakfast}, for lunch i had ${lunch} and for dinner i had ${dinner}.` )
}
// call the function and pass the arguments for each meal
food( "cereal", "Sandwich", "Full English" );

//// challenge 2 - check if num is divisible by 3 and/or 5 and output fizz, buzz or fizzbuzz
// function to check if num is divisible by 3 and/or 5
const fizzBuzz = (num) =>
{
    // checks if the num is negative or if the data type is a string
    if (num <= 0 || typeof num === 'string')
    {
        return(`Your number ${num} must be a positive number or is a string`);
    }

    // check if num is divisible by both 3 and 5
    else if (num % 3 === 0 && num % 5 === 0)
    {
        return("Fizz Buzz")
    }

    // check if num is divisible by 3
    else if (num % 3 === 0)
    {
        return("Fizz")
    }

    // check if num is divisible by 5
    else if (num % 5 === 0)
    {
        return("Buzz")
    }

    else if (num % 3 != 0 || num % 5 !=0)
    {
        return(`Your number ${num} is not divisible by 3 or 5`);
    }

    // if no number is inserted then error message is displayed
    else
    {
        return("something has gone wrong, please insert a number")        
    }
}

console.log( fizzBuzz(7) );

//// challenge 3 - check if the sum of 2 numbers is even, if not return the result when they are multiplied together
// create function to check if sum of 2 numbers are even
const checkIfEven = (num1, num2) =>
{
    // variable to add the 2 numbers together
    let totalSum = num1 + num2;
    // variable to multiply the 2 numbers together
    let totalMult = num1 * num2;

    // check if the total added together is even by checking if their is a remainder when divided by 2
    if ( totalSum % 2 === 0 )
    {
        return(`The number ${totalSum} is even`);
    }

    // return the value when the 2 numbers are multiplied
    else if (totalMult)
    {
        return (`The numbers ${num1} and ${num2} multiplied together are ${totalMult}`)
    }
    
    // display message if the user didn't input 2 numbers
    else
    {
        return("Make sure you enter 2 numbers")
    }
}

// output the result to the console
console.log( checkIfEven(3, 6) );

//// challenge 4 - generate a random num between 1-50
let randOneToFifty = (numAmount) =>
{
    for ( let i = 1; i < numAmount; i++)
    {
        // generate a random number between 0 and 1 and multiply by 51 to get a float between 0 and 51
        // use Math.floor to round down to the nearest integer making the max 50
        let num = Math.floor( Math.random() * 51 )
        console.log(num)
    }
}
// call the function, number will determine how many nums are generated
randOneToFifty( 10 );

//// challenge 5 - create loop to list numbers 0-9 in reverse order (9-0)
// array containing numbers 0-9
const numArr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// loop to decrement down from the length of array
// .length() counts 1-10 so we minus 1 as index starts from 0 not 1
let countDown = () =>
{
for ( let i = numArr.length -1; i >= 0; i-- )
    {
        // output each item to the console until loop ends
        console.log(numArr[i])
    }
}
countDown();

//// challenge 6 - program to create a multiplication table for a given number 10 times
// function to generate a times table for a given number
let timesTable = ( num ) =>
{
    // variable to store the table
    let table = [];
    // for loop to iterate 10 times
    for (let i = 1; i <= 10; i++)
    {
        // times the number by index which iterates by one each time the loop is ran
        // push the results into a new table
        table.push( num * i );
    }
    // return the table to be used when the function is called
    return table;
}

// output the table to the console by running the function and passing an argument through
console.table( [ timesTable( 13 ) ] );


//// challenge 7 - calculate average score of three subjects math, english and science
// display grade depending on the average result
// function defined with a parameter for each subject
let calcAvg = ( math, eng, sci ) =>
{
    let avg = (math + eng + sci) / 3;

    // check if the avg is greater than or equal to 90
    if (avg >= 90)
    {
        console.log("Grade A");
    }

    // check if the avg is greater than or equal to 80
    else if (avg >= 80)
    {
        console.log("Grade B");
    }

    // check if the avg is greater than or equal to 70
    else if (avg >= 70)
    {
        console.log("Grade C");
    }

    // if none of the above match criteria then failed is output to console
    else
    {
        console.log("Failed")
    }

    return avg
}

// function is called and the result is output to the console.
console.log( `Your average score is: ${ calcAvg( 90, 70, 80 ) }`);
