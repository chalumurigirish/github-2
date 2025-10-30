console.log("new document", document)
// console.log("inner html",document.getElementById('name').innerHTML)
// console.log("inner value",document.getElementById('name').innerText)

let  name = document.getElementById('name').innerText;
console.log("name", name);
document.getElementById('name').innerText ="Hello World";

// let counter = document.getElementById('counter-value').innerText;
// counter = Number(counter);
// console.log("counter", counter);

// above piece of code is wrong because it initalises with value 0 but never gets refreshed with new value later when function is executed

function increment(){
    let counter = document.getElementById('counter-value').innerText;
    // console.log("increment clicked", counter);
    counter = Number(counter);
    
    document.getElementById('counter-value').innerText = counter + 1
    // console.log("increment clicked", document.getElementById('counter-value').innerText);
}

function decrement(){
    console.log("decrement clicked");
    let counterHtml = document.getElementById('counter-value');
    counterHtml.style.fontWeight = "bold"
    let counter = document.getElementById('counter-value').innerText;
    // console.log("increment clicked", counter);
    counter = Number(counter);
    if(counter >0){
    document.getElementById('counter-value').innerText = counter - 1

    }else{
        alert("counter cannot be negative")
    }
    
    
}

function toggle(){
    let toggleOn = document.getElementById("toggle-on");
    let toggleOff = document.getElementById("toggle-off");

    if(toggleOff.style.display === "none"){
        toggleOff.style.display = "block";
        toggleOn.style.display = "none";
    }else{
        toggleOff.style.display = "none";
        toggleOn.style.display = "block"
    }
}


// const n = 8;
// let answer = 1;
// for(let i =1; i<=n; i+=1){
//     console.log("before change",answer);
//     answer *= i
//     console.log("after change",answer);

// }


//functions 
//arrow function 

function factorial(n, n2, n3, n4){
    // console.log("inside function", n, n2, n3, n4);
    // let answer1 = 1;
    // loop(n);
    let answer1 = loop(n);
    // console.log("factorial answer1", answer1);

    let answer2 = loop(n2);
    // console.log("factorial answer2", answer2);
    
    
    let answer3 =loop(n3); 
    // console.log("factorial answer3", answer3);
    

    // console.log("factorial answer", answer);

    return {"answer1":answer1, "answer2": answer2, "answer3": answer3};
// console.log("my first function", arg1, arg2, arg3)
}

function loop(n){


    let answer = 1
    for(let i =1; i<=n; i+=1){
        answer *= i
    }

    return answer
}


const result = factorial(3.5,6,4);
// console.log("after function", result.answer1, result.answer2, result.answer3)
