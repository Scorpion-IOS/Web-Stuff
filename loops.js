//FOR LOOPS ****************************************************** */

// for(1.начальное выражение,2. условие,3.выражение приращения(инкримент i++)){заявление 
// (conlole.log('Hello World'))
// }


// for (let i = 0; i < 5; i++){     // сказать привет 5 раз
//     console.log('Hello World')
// }

// for (let i = 0; i <= 5; i++){      //если ставить >= то отчет идет от 1 а не от 0
//     if (i % 2 !==0) console.log(i);
// 
// console.log();

// for (let i = 0; i < 10; i++) {
//     if (i <= 10){
//         console.log(i);
        
//     }
// }


/******************************Define a function, onlyOdds, that accepts a number as an argument. 
 * onlyOdds should should return the sum of all the odd numbers between the given number and 1.If onlyOdds receives an argument less than 1, it should return 0. onlyOdds(6); // => 9 (5 + 3 + 1) **************************** */
//************************************-- E   X   A   M   P   L   E-- *******************************//
//  function onlyOdds(num) {
//     let sum = 0;
//     //** */ start the loop at num, end the loop at 1, decrementing by 1
//     for (let i = num; i >= 1; i--) {  
//       //** */ if i is an odd number...
//       if (i % 2 === 1) { 
//         //** */ ...add it to the sum
//         sum += i;
//       }
//     } 
//     //** */ return the sum after the for loop is finished
//     return sum;
//   }  
//   //** */ alternate solution that uses a while loop and a helper function
//   function onlyOdds2(num) {
//     let sum = 0; 
//     //** */ keep looping until num is 1
//     while (num >= 1) { 
//       //** */ pass the num into isOdd, which will return true if num is odd
//       if (isOdd(num)) {
//         sum += num;
//       }  
//       //** */ don't forget to decrement num or we'll have an infinite loop
//       num--;
//     } 
//     return sum;  
//     //** */ our helper function takes a number a returns true if the number is odd
//     function isOdd(num) {
//       return num % 2 === 1;
//     }
//   }
//*****************************EXAMPLE******************************************///
//********************************************************************************

// const onlyOdds = (num) => {
//     let sum = 0 
//     for (let i = 1; i <= num; ++i) {
//       if (i % 2 ===1) sum += i;
//     }
//     return sum;
//   }
//**************************НЕ ЧЕТНЫЕ ЧИСЛА*************************************///
//********************************************************************************




//********************************Crazy Caps************************************************
// Define a function, crazyCaps, that accepts a string as an argument. crazyCaps should return a string in which every other character is capitalized. The first letter should be lower-cased.

// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!

//******************************E  X  A  M  P  L  E******************************************
