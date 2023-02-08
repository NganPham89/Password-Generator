// Assignment code here
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~"];

var generatePassword = function () {
  console.log("I clicked the button");

  var passwordLength = [];
  var userChoiceLength = window.prompt("How long would you like your password? \n(Mininum 8 and maximum 128 characters)")
  if (passwordLength <8 || passwordLength >128 || !userChoiceLength) {
    alert("Your password length has to be a number between 8 and 128")
  }
    return "Your password here";

  var lowerCase;
  var userChoiceLower = confirm("Would you like to include lower case letters?")
  if (!userChoiceLower) {

  }

  var upperCASE;
  var userChoiceUpper = confirm("Would you like to include UPPER CASE letters?")
  if (!userChoiceUpper) {

  }

  var numbers;
  var userChoiceNum = confirm("Would you like to include numbers?")
  if (!userChoiceNum) {

  }

  var specChar;
  var userChoiceSpec = confirm("Would you like to include special characters?")
  if (!userChoiceSpec) {

  }






  //display the password to the page
  return "Generated pass will go here";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
