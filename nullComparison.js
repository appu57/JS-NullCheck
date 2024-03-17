console.log(null == 0);  //false (==) if null is compared with any other value apart from undefined we get as false 
console.log(null > 0);   //false
console.log( null >= 0 );  //true
console.log(Number(null)) ; //0

//In javascript ">" converts variable to number  so null is converted to 0 then checks if 0 equal to 0 so true;

"###############################################################################################################################################################"

if( [] )
{
    console.log("answer for checking empty object " +"hello");  //prints hello
}
else{
    console.log("answer for checking empty object "+ "world");
}
"###############################################################################################################################################################"


console.log(~~21.21); //remove the floating points
"###############################################################################################################################################################"


let num = 2;

let foo = !--num;  //pre decrement converts 2 to 1 , 1 is truthy value and negating the truthy value we get false 
let bar = !--num;  //pre decrement convert 1 to 0 , 0 is falsy and negating the falsy gives true

console.log(foo); //false

console.log(bar); //true
"###############################################################################################################################################################"

let a = [].every(()=>true);

let b = [].every(()=>false);

console.log(`a=${a}`);
console.log(`a=${b}`);



//every acts like the forAll quantifier , an empty array returns true(it is true that all elements of the empty set satisfy every condition)
"###############################################################################################################################################################"

console.log( 1 !==true);  //true

console.log(1 != true);   //false
  
console.log(NaN !== NaN); //true   

// !== strict comparison(==) so in SC the type are also compared  so in first question , type of 1 and type of true is different therefore 1==true is false negation of false is true

//Lose or Abstract inequality operator(!=) type is not considered when (=)is used but both 1 and true are truthy value so !true is false but reason for question 2 to print false is because 1 is not coerced to boolean value so comparsion is not between true and true 
//just because 1 is truthy but the true is coerced to number 1 so 1=1 true then !true is false when condition is is 2!=true is it true

console.log( 2 != true) ; //true because 2=1 false and !false is true in the condition true is coerced to number 

//Each NaN is not strictly or losely pr losely equal to NaN

"###############################################################################################################################################################"