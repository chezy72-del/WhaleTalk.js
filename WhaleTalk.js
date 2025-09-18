//Objective: create a program that translates text to "whale talk"
//Task 1: Create a variable to translate to whale talk
let input = 'my name is charlotte';
//Task 2: Create an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Task 3: Create an empty array
let resultArray =[];
//Task 4-12: Create a loop to compare vowel array to input variable
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    //checks for E and U: then doubles them
    if(input[i] === vowels[j]){
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i], input[i]);
        } else {
        resultArray.push(input[i]);
        }
    }
  }
}
//Task 13: Decalre a variable that joins and capitalises the string
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
