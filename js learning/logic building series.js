console.log("Hello World") //prints hello world

//prints the sum of a and b

//m1
let a = 5
let b = 6
console.log(a+b);

//m2
let a = 5
let b = 6
let c = a+b
console.log("sum is",c);

//m3
function sum(a,b) {
    const sum = a+b;
console.log("sum is" , sum);
}
sum (1,2) //this method works for all types of numbers ie; decimals , +ve , -ve 

//area of rectangle
function area(length,breadth){
    const area = length*breadth
        if(length <= 0){
            throw new RangeError ("length should be a positive number");
            
        }
         if(breadth <= 0){
            throw new RangeError ("breadth should be a positive number");
            
        }

    console.log("area is" , area)
}
area(4,5)

//





