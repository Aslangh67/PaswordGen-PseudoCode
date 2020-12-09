// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: Create a generatePassword function and write all the logic within this function

function generatePassword() {
  
// TODO: Create confirm to ask user if they want capital letters and set to a variable

// TODO: Create confirm to ask user if they want lowercase letters and set to a variable

// TODO: Create confirm to ask user if they want numbers and set to a variable

// TODO: Create confirm to ask user if they want Special char and set to a variable

// TODO: Create promt to ask user how many char they like they pass to be ( at least 8 characters and no more than 128) and set to a variable
 var passLen = prompt(" how long ? (between 8-128)")
// TODO: creat a conditional to make sure tha the user has chosen at leat one type of char

// TODO: Create an array of CAP letters , lower letters , nums, and special char.

//TODO: Create an empty array to hold user requested chars

// TODO: Creat multiple if  statments that cheks if the user said yes or no to different confirms that we asked them, and base on their response push those specific chars to our empty array

// TODO: create a var to hold the finl results

var finalPass;

// TODO: I need a for loop to loop over my final array, it should run base on the results of the prompt when we asked user how mant chars they like their pass to be, choose randomly from our final array that holds all the char that the user wanted, and save them to our finalPass var

//   var randomNum = Math.floor(Math.random() * lenght of final array)
 //inside the forr loop ( finalPass = finalPass + filanArray[randomNum] )

 // TODO:  return the finalPass from this function out side of the for loop at the end on this function



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
