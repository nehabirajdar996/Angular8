

function add(n1,n2) {
    console.log(n1+n2);
}
add(3,2)

//WAP to find square root of number
function squareRoot(n) {
    return Math.sqrt(n)
}

const result = squareRoot(25)
console.log(result);

//WAP to find area of triangle
function areaOfTriangle(b,h) {
    area = ((1/2)*b*h);
    console.log(area);
}
areaOfTriangle(5,8)

// WAP to swap two variables
function swap(num1,num2) {
    let temp =num1;
    num1=num2;
    num2 = temp;
    console.log(num1,num2);
    
}
swap(10,20)


//JavaScript program to swap two variables

// //take input from the users
// let a = prompt('Enter the first variable: ');
// console.log(a);
// let b = prompt('Enter the second variable: ');

// //using destructuring assignment
// [a, b] = [b, a];

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

//Javascript Program to Check if a number is Positive, Negative, or Zero

function check(num) {
    if (num==0) {
        console.log(`Given number ${num} is "zero"`);
    }else if (num>0) {
        console.log(`Given number ${num} is "positive"`);
    } else {
        console.log(`Given number ${num} is "negative"`);
    }
}
check(0);
check(10);
check(-2);
check(20)

//Javascript Program to Check if a Number is Odd or Even

function evenOdd(n) {
    if (n%2==0) {
        console.log(`Given number ${n} is "EVEN"`);
    }else{
        console.log(`Given number ${n} is "OOD"`);
    }
}
evenOdd(10)
evenOdd(3)
evenOdd(2)

//JavaScript Program to Find the Largest Among Three Numbers
function largestNum(n1,n2,n3) {
 if (n1>=n2 && n1>=n3) {
    console.log(`${n1} is large`);
 }else if(n2>=n1 && n3>=n1){
    console.log(`${n2} is large`);
 }else{
    console.log(`${n3} is large`);
 }
}

largestNum(10,20,15)
largestNum(10,5,40)

function max(num1,num2,num3) {
    let output=Math.max(num1,num2,num3)
    return output;
}
const results=max(10,20,30)
console.log(results);

//JavaScript Program to Check Prime Number

function prime(n1) {
    let isPrime = true;

    if (n1===1) {
        console.log(`given number is neither prime nor composite`);
    }else if(n1>1){
    for (let index = 2; index < n1; index++) {
      if(n1% index==0){
        isPrime = false;
        break
      }
    }
    if (isPrime) {
        console.log(`number ${n1} is prime`);
    }else{
        console.log(`number ${n1} is not prime`);
    }
}
}
prime(3)
prime(1);
prime(9)
