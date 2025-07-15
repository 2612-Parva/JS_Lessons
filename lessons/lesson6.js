// Conditional Statements

// if(condition){
  // code to execute if condition is true
//}

// If hour between 6 and 12, greet with "Good Morning",
// If hour between 12 and 18, greet with "Good Afternoon", 
// Otherwise greet with "Good Evening"
var hour = 5;
if(hour >=6 && hour < 12){
    console.log("Good Morning");
}
else if(hour >=12 && hour < 18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}