// Assignment code here
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}", "~"];

function passwordChoices() {
  passwordResult = []; //use to store all the chosen items from the 4 arrays, starting at nothing

  passwordLength = parseInt(prompt("How long would you like your password? \n(Mininum 8 and maximum 128 characters)"));
  //NaN "Not a Number"
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Your password length has to be a number between 8 and 128");
    return; //end function if the user response is not within range
  }

  if (confirm("Would you like to have lower case letters in your password?")) {
    passwordResult = passwordResult.concat(charLowerCase);
  }

  if (confirm("Would you like to have UPPER CASE letters in your password?")) {
    passwordResult = passwordResult.concat(charUpperCase);
  }

  if (confirm("Would you like to have numbers in your password?")) {
    passwordResult = passwordResult.concat(charNumber);
  }

  if (confirm("Would you like to have special characters in your password?")) {
    passwordResult = passwordResult.concat(charSpecial);
  }
  return true; //true if all user inputs go through
}

var generatePassword = function () {
  var passwordFinal = " ";
  for (var i = 0; i < passwordLength; i++) {
    var randomPick = Math.floor(Math.random() * passwordResult.length);
    passwordFinal = passwordFinal + passwordResult[randomPick];
  }
  return passwordFinal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //only run if passwordChoices function runs the whole way
  if (passwordChoices() === true) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
