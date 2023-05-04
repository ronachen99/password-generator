// Assignment Code
var generateBtn = document.querySelector("#generate");

// Directs the end user to click on the generate button
window.alert("Click on the red button to generate your password!");

// The arrays for uppercase, lowercase, numbers, special characters, and selected characters  that were chosen by the end user
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var selectedCharacters = [];

// Set max and min length values
var min = 8;
var max = 128;

// Sets a password variable with no values
var password = ""

// Writes the function for generatePassword
function generatePassword() {

  // Prompt users to choose what characters to include in their password
  var uppercaseTrue = confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  var lowercaseTrue = confirm("Do you want lowercase letters (i.e., abc) in your password?");
  var numbersTrue = confirm("Do you want numbers (i.e., 123) in your password?");
  var specialCharactersTrue = confirm("Do you want special characters (i.e., !@#$%^) in your password?");
  // If the user selects "cancel" for all prompts, the function will terminate
  if (uppercaseTrue === false && lowercaseTrue === false && numbersTrue === false && specialCharactersTrue === false) {
    return "You must select at least one password criteria.\nPlease try again!";
  }

  // Prompt users to input a desired password length
  var passwordLength = prompt("The password must be at least 8 characters and no more than 128 characters. Please enter your desired password length (i.e., 8-128).");
  // If the user enters an invalid number, it will prompt the user to enter a valid number, if not the function will terminate after two inputs of invalid numbers
  if (passwordLength < min || passwordLength > max) {
    prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
  } else if (isNaN(passwordLength)) {
    prompt("Please enter a valid password length!\nEnter a number from 8 to 128:");
    return "You need to enter a valid password length. Please try again!";
  }

  // Need to add the selected criteria arrays together using .concat method, which overwrites everytime when the criteria is true
  if (uppercaseTrue) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }

  if (lowercaseTrue) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }

  if (numbersTrue) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }

  if (specialCharactersTrue) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

//   // Randomization would continue to select a random character from the selected characters until the desired passwordLength
//   for (var x = 0; x < passwordLength; x++); {
//     y = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
//   }

//   // Need to add the previously defined value of password to the created randomized string of password
//   var password = password.join(y);

//   return password;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);