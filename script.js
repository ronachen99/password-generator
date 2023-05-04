// Assignment Code
var generateBtn = document.querySelector("#generate");

// Directs the end user to click on the generate button
window.alert("Click on the red button to generate your password!");

function tryAgain() {
  return confirm("Would you like to try again?")
}

function getCharacters() {
  // The arrays for uppercase, lowercase, numbers, special characters, and selected characters  that were chosen by the end user
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
  var selectedCharacters = [];
  var uppercaseTrue = confirm("Do you want uppercase letters (i.e., ABC) in your password?");
  if (uppercaseTrue) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }
  var lowercaseTrue = confirm("Do you want lowercase letters (i.e., abc) in your password?");
  if (lowercaseTrue) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }
  var numbersTrue = confirm("Do you want numbers (i.e., 123) in your password?");
  if (numbersTrue) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }
  var specialCharactersTrue = confirm("Do you want special characters (i.e., !@#$%^) in your password?");
  if (specialCharactersTrue) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  // If the user selects "cancel" for all prompts, the function will terminate
  // Need to add the selected criteria arrays together using .concat method, which overwrites everytime when the criteria is true

  if (selectedCharacters.length > 0) {
    return selectedCharacters
  }
  alert("you must select at least one character type")
  if (tryAgain()) {
    return getCharacters()
  }
}

function getLength() {
  // Set max and min length values
  var min = 8;
  var max = 128;
  var passwordCount = prompt("The password must be at least 8 characters and no more than 128 characters. Please enter your desired password length (i.e., 8-128).");
  if (passwordCount >= min && passwordCount <= max) {
    return passwordCount
  }
  alert("you must enter an integer value!")
  if (tryAgain()) {
    return getLength()
  }
}


// Writes the function for generatePassword
function generatePassword() {
  var passwordLength = getLength()
  if (passwordLength === undefined) {
    return "You must enter an integer between 8 and 128 for the program to work"
  }
  // Prompt users to choose what characters to include in their password
  var passwordBase = getCharacters()
  if (passwordBase === undefined) {
    return "You must select at least one character type"
  }
  // Sets a password variable with no values
  var password = ""
  // Randomization would continue to select a random character from the selected characters until the desired passwordCount
  for (var i = 0; i < passwordLength; i++) {
    randomCharacters = passwordBase[Math.floor(Math.random() * passwordBase.length)];
    password = randomCharacters.concat(password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);