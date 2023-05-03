// Assignment Code
var generateBtn = document.querySelector("#generate");

// The arrays for uppercase, lowercase, numbers, and special characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Write password to the #password input
function writePassword() {

  // Prompts that allow users to click "ok" for yes or "cancel" for no
  var uppercase = window.confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  var lowercase = window.confirm("Do you want lowercase letters (i.e., abc) in your password?");
  var numbers = window.confirm("Do you want numbers (i.e., 123) in your password?");
  var specialCharacters = window.confirm("Do you want special characters (i.e., !@#$%^) in you password?");
  var passwordLength = window.prompt("Enter your desired password length with at least 8 characters and no more than 128 characters.")

  console.log(passwordLength);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
