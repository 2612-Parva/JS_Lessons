// Loops

//for(statment1; statement2; statement3) {
    // code block to be executed
//}

for(var i=0;i<5;i++){
    console.log("Hello World" + i);
}

//for of loop

var fruits = ["Apple","Banana", "Cherry"];
for(var fruit of fruits){
    console.log(fruit);
    if(fruit=="Banana"){
      break;
    }
}

//ES6 syntax for loop

fruits.forEach(fruit=> {
    console.log(fruit);
})