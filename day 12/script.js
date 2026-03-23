//even numbers between 1 to 50
// for(let i = 1; i < 50; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// sum from 1 to n numbers
// let num = parseInt(prompt("enter number you want sum till: "));
// let sum = 0;
// for (let i = 1 ; i <= num; i++){
//     sum += i;
// }
// console.log(`sum of numbers from 1 to ${num} is : ${sum}`);

// multiplication table of given number
// let num = parseInt(prompt("Enter Number you want table of : "));
// let i= 1;
// while(i < 11){
//     console.log(`${num} X ${i} = ${num*i}`);
//     i++;
// }


//reverse a number 
// let number = parseInt(prompt("Enter Number to reverse : "));
// let reverse = 0;
// let num = number;
// while(num > 0){
//     let last_digit = num % 10 ;
//     reverse = reverse * 10 + (num%10);
//     num = Math.floor(num / 10); 
// }

// console.log(`reverse of ${number} is : ${reverse}`)


// count digits
// let number = parseInt(prompt("Enter Number : "));
// count = 0;
// let num = number;
// while (num > 0){
//     count ++;
//     num = Math.floor(num/10)
// }
// console.log(`Count of Digits in ${number} is: ${count}`)


// number palindrome 
// let number = parseInt(prompt("Enter Number to check Palindrome : "));
// let reverse = 0;
// let num = number;
// while(num > 0){
//     let last_digit = num % 10 ;
//     reverse = reverse * 10 + (num%10);
//     num = Math.floor(num / 10); 
// }
// let isPalin = number === reverse
// if (isPalin){
//     console.log(`given number ${number} is Palindrome`)
// }else{
//     console.log(`given number ${number} is Not Palindrome`)
// }