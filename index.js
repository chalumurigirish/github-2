console.log('hello world');
console.log("hellow world external")
console.log(a);

console.log(document.getElementById('name'))


var a = "10";
const b = 10;

const compare = a<=b
console.log(compare);
const c = a-b;

console.log(typeof c)

console.log(c);

const newVariable = null;
console.log("new valriable",typeof newVariable);

const object = {
    name: "John",
    age: 30,
    city: "New York"
}

const data = null;
console.log(typeof data);

const array = [
{

    name: "Alice",
    age: 25
},
{
    name: "Bob",
    age: 28
}
]
console.log(typeof array);

const ObjectName = object.name
console.log(ObjectName);

const jsonObject = JSON.stringify(object);
console.log(  jsonObject);

const parsedObject = JSON.parse(jsonObject);
console.log(parsedObject);

//concatentation of strings attaching two string side by side 



const equalcompare = a==b
console.log("equalcompare",equalcompare);

const strictequalcompare = a===b
console.log("strict",strictequalcompare);




const x = "undefined" ;
console.log(!x);

const a1 = "first"
const a2 = "second"

// const combined = a1 + " " + a2;
const combined = `${a1} ${a2}`
console.log(combined);

const n = 15
let answer = 0

for(let i =0; i<n; i+=1){

    const isDivisibleBy3 = i % 3

    const isDivisibleBy5 = i % 5

    const isDivisibleBy7 = i % 7

    // console.log("divisible 3",isDivisibleBy3);
    // console.log("divisible 5",isDivisibleBy5);

    if(!isDivisibleBy3 || !isDivisibleBy5 || !isDivisibleBy7){
        answer += 1
    }


}

// console.log("answer",answer);
const testing = "hello"
const length = testing.length
console.log("length",length);
const n2 = 123

console.log("new length", n2.length);
const n2string = n2.toString()
console.log("n2string",n2string, n2);


let q = n2
let answer2 = 0

for(let i =0; i<n2string.length; i+=1){
     answer2 += q%10

     const q2 = q/10
     console.log("q2",q2);
     q = Math.floor( q/10 )

}

console.log("answer2",answer2);


let n3 = 1234
const n3string = n3.toString()
let remainder = 0
let reversedString = ""

for (let i =0 ; i<n3string.length; i+=1){
    remainder = n3 % 10
    reversedString += remainder.toString()
    n3 = Math.floor(n3/10)
}

console.log("reversedString",Number(reversedString), Number("abc"));

const n4 = 5
let answer4 = 0

for (let i =0; i<n4; i+=1){
    answer4 += 2*i +1
}

console.log("answer4",answer4);


const n5 = 17

let counter = 0

for (let i =1 ; i<=17; i+=1){
    const remainder = n5 % i
    if (remainder === 0){
        counter += 1
    }
}

if(counter >2){
    console.log("not prime");
}else{
    console.log("prime");
}


const a6 = 7
const b6 = 25
let smallest = 0

let gcd = 0
const test6 = Math.min(a6,b6)

if(a6< b6){
    smallest = a6
}else{
    smallest = b6
}
for (let i =1 ; i<=smallest; i+=1){
    if(a6 % i ===0 && b6 % i ===0){
        gcd = i
    }
}

console.log("gcd",gcd);