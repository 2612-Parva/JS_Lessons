// Logical AND

console.log(true && true);  //all values have to be true for expression to be true

//Logical OR

console.log(true || false); //only one value has to be true for expression to be true

var ageIsMorethan18 = true;
var hasVoterID = false;

var canVote = ageIsMorethan18 && hasVoterID; //both conditions must be true
console.log(canVote); //false, because hasVoterID is false

//Logical NOT
console.log(!canVote); //true, because canVote is false
