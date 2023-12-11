//Q1 : Declare and initialize an empty multidimensional array.(Array of arrays)

//let mobileBrands = [""[("", "", ["", "", ""], "", "", "")]];

//Q2 : Declare and initialize a multidimensional array representing the following matrix:

// var numbers = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (let a = 0; a < 3; a++) {
//   for (let b = 0; b < 4; b++) {
//     document.write(numbers[a][b] + " ");
//   }
//   document.write("<br/>");
// }

//Q:3 3. Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

//Q:4 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let table = prompt("enter table number");
// let endingNumber = prompt("length of table");
// for (let i = 1; i <= endingNumber; i++) {
//   document.write(table, " x ", i, " = ", i * table, "<br/>");
// }

//Q:5 Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (i = 0; i < fruits.length; i++) {
//   document.write(fruits[i], "<br>");
// }
// document.write("<br>");

// for (let b = 0; b < fruits.length; b++) {
//   document.write("Element at index ", b, " is ", fruits[b] + "<br>");
// }

//Q:6 Generate the following series in your browser. See example output.

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// for (let index = 0; index <= 15; index++) {
//   document.write(index);
// }
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<br/>");
// for (let i = 10; i >= 0; i--) {
//   document.write(i);
// }
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
/* The code is printing even numbers from 0 to 20 using the `document.write()` method. It checks if the
current number `m` is divisible by 2 (i.e., even) using the modulo operator `%`. If it is, the
number is printed using `document.write()`. */
// document.write("<br/>");
// for (let m = 0; m <= 20; m++) {
//   if (m % 2 == 0) {
//     document.write(m);
//   }
// }
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<br/>");
// for (let m = 0; m <= 20; m++) {
//   if (m % 2 != 0) {
//     document.write(m);
//   }
// }
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// let Series = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"];
// for (s = 0; s < Series.length; s++) {
//   document.write(Series[s] + "k, ");
// }

/*7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given item is
found in the list or not.*/

//  let bakItem = ["cake", "apple pie", "cookie", "chips", "patties"];
//  userSearch = prompt("search your item");
//  for (let i =0;  i<bakItem.length; i++) {
//      if (userSearch === bakItem[i] ) {
//     document.write(`${bakItem[i]} is avalible our bakery is  ${bakItem.indexOf(userSearch)} index`);


//  }
 

//  }

/*
8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].

*/
//  let num5 = [24, 53, 78,175, 91, 12];
//  console.log(num5);
// let max = Math.max(...num5)
// console.log(`Larger number is ${max} `);


//9. Write a program to identify the smallest number in the given array.
// let num6 = [24, 53, 78, 91, 12,3]
// console.log(num6);
// let min = Math.min(...num6)
// console.log(min);

//10. Write a program to print multiples of 5 ranging 1 to100.

// for(i = 5; i<=100; i+=5){
//   document.write(` ${i} ` )
// }

